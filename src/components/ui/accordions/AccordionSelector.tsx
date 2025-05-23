import { SelectableOptionType } from '@/types/ProductResponseDataTypes';
import { AccordionContent, AccordionItem, AccordionTrigger } from './accordion';

export default function AccordionSelector({
  title,
  options,

  onOptionSelect,
}: {
  title: string;
  options?: SelectableOptionType[];
  selectedId?: number;
  onOptionSelect: (id: number) => void;
  isOpen?: boolean;
}) {
  return (
    <AccordionItem value={title}>
      <AccordionTrigger className="p-0 padded py-3.5 text-[0.9375rem] font-semibold text-black hover:no-underline hover:black">
        {title}
      </AccordionTrigger>
      <hr />
      <AccordionContent className="flex flex-col w-full p-0">
        {options &&
          options.map((option) => (
            <button
              key={option.id}
              className="text-left padded py-3.5 cursor-pointer
              border-b border-lightGray-2 last:border-b-0"
              onClick={() => onOptionSelect(option.id)}
            >
              {option.name}
            </button>
          ))}
      </AccordionContent>
    </AccordionItem>
  );
}
