// components/footer/FooterPolicyLinkItem.tsx
import Link from 'next/link';

interface Props {
  href: string;
  label: string;
  showDivider?: boolean;
}

export default function FooterPolicyLinkItem({
  href,
  label,
  showDivider,
}: Props) {
  return (
    <li className="flex items-center space-x-2.5">
      <Link href={href} className="hover:text-green-600">
        {label}
      </Link>
      {showDivider && (
        <span className="text-[#CDCDCD]" aria-hidden="true">
          |
        </span>
      )}
    </li>
  );
}
