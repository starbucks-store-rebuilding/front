'use client';

import { ProductDescriptionType } from '@/types/ProductResponseDataTypes';
import { useMemo, useRef, useState } from 'react';
import ExpandCollapseButton from './ExpandCollapseButton';

export default function ProductDesc({
  detailDescription,
}: ProductDescriptionType) {
  const [expanded, setExpanded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const toggleExpanded = () => {
    if (expanded && sectionRef.current) {
      const top =
        sectionRef.current.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setExpanded(!expanded);
  };
  const renderedHTML = useMemo(() => {
    return <article dangerouslySetInnerHTML={{ __html: detailDescription }} />;
  }, [detailDescription]);

  return (
    <section className="padded" ref={sectionRef}>
      <h2 className="font-pretendard font-bold text-lg pb-10">상품 정보</h2>
      <style jsx global>{`
        .collapse_on,
        .collapse_off,
        .btn_a11y,
        .tmpl_guide_notice,
        .warning_txt,
        .warning_copyright {
          display: none;
        }
        .inner-html img {
          width: 100% !important;
          object-fit: cover;
          max-width: none !important;
          height: auto !important;
        }
      `}</style>
      <section
        className={`relative inner-html overflow-hidden transition-all duration-300 ease-in-out ${
          expanded ? 'max-h-[9999rem]' : 'max-h-[75rem]'
        }`}
      >
        {renderedHTML}
        {!expanded && (
          <div className="absolute bottom-0 left-0 w-full flex justify-center bg-gradient-to-t from-white via-white/90 to-transparent pt-8 pb-4">
            <ExpandCollapseButton
              expanded={expanded}
              onClick={toggleExpanded}
            />
          </div>
        )}
      </section>
      {expanded && (
        <div className="mt-5">
          <ExpandCollapseButton expanded={expanded} onClick={toggleExpanded} />
        </div>
      )}
    </section>
  );
}
