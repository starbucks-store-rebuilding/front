import Image from 'next/image';
import { EventDataType } from '@/types/ProductResponseDataTypes';
import EventProductList from './EventProductList';
import PrecautionAccordion from './PrecautionAccordion';
import { CommonResposiveNextImage } from '@/components/ui/CommonResponsiveNextImage';

export default async function EventSection({
  eventsData,
}: {
  eventsData: EventDataType;
}) {
  const eventUuid = eventsData.eventUuid;

  return (
    <>
      <CommonResposiveNextImage
        ImageUrl={eventsData.imageUrl}
        description={eventsData.description}
      />
      <section>
        <PrecautionAccordion title="기획전 유의사항">
          <ul className="text-lightGray-1 text-sm">
            <li>{eventsData.precaution}</li>
          </ul>
        </PrecautionAccordion>
      </section>
      <EventProductList eventUuid={eventUuid} />
    </>
  );
}
