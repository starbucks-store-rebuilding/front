import {
  getEventDataByEventUuid,
  getEventDatas,
} from '@/actions/event-service';
import EventCarousel from '@/components/pages/event/EventCarousel';
import EventSection from '@/components/pages/event/EventSection';
import { redirect } from 'next/navigation';
export default async function page({
  searchParams,
}: {
  searchParams: Promise<{ event: string }>;
}) {
  const eventsData = await getEventDatas();
  if (!eventsData) return <div>진행중인 이벤트가 없습니다.</div>;

  const eventItems = eventsData.map((event) => ({
    id: event.eventUuid,
    name: event.name,
  }));

  const { event } = await searchParams;
  if (event === undefined || '') {
    redirect('/error');
  }

  const selectedEventData = await getEventDataByEventUuid(event);

  return (
    <main>
      <EventCarousel eventItems={eventItems} />
      <EventSection eventsData={selectedEventData} />
    </main>
  );
}
