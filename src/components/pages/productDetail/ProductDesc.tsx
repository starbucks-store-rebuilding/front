'use client';

import { ProductDescriptionType } from '@/types/ProductResponseDataTypes';
import { useState } from 'react';
import ExpandCollapseButton from './ExpandCollapseButton';

export default function ProductDesc({
  detailDescription,
}: ProductDescriptionType) {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded(!expanded);

  return (
    <section className="padded">
      <h2 className="font-pretendard font-bold pb-10">상품 정보</h2>
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
          width: 100%;
        }
      `}</style>
      <div
        className={`relative inner-html overflow-hidden transition-all duration-300 ease-in-out ${
          expanded ? 'max-h-[9999px]' : 'max-h-[35rem]'
        }`}
      >
        <div dangerouslySetInnerHTML={{ __html: detailDescription }} />

        {!expanded && (
          <div className="absolute bottom-0 left-0 w-full flex justify-center bg-gradient-to-t from-white via-white/90 to-transparent pt-8 pb-4">
            <ExpandCollapseButton
              expanded={expanded}
              onClick={toggleExpanded}
            />
          </div>
        )}
      </div>

      {expanded && (
        <div className="mt-5">
          <ExpandCollapseButton expanded={expanded} onClick={toggleExpanded} />
        </div>
      )}
    </section>
  );
}
