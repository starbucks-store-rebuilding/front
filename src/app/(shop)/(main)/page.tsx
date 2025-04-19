import BannerSlide from '@/components/ui/carousels/BannerSlide';
import {
  getEventBannerImageDatas,
  getEventDatas,
} from '@/actions/event-service';
import MainEventCarouselSection from '@/components/pages/main/MainEventCarouselSection';

export default async function Home() {
  const { data: BannerImageDatas } = await getEventBannerImageDatas();
  const { data: eventsData } = await getEventDatas();

  return (
    <main>
      {BannerImageDatas && <BannerSlide slides={BannerImageDatas} />}
      <MainEventCarouselSection eventsData={eventsData} />
    </main>
  );
}
