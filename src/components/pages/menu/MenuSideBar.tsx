import MenuTop from './MenuTop';
import MenuBannerList from './MenuBannerList';
import MenuCategoryList from './MenuCategoryList';
import { CategoryMenuType } from '@/types/ResponseDataTypes';
import { cn } from '@/lib/utils';
import { useModalContext } from '@/context/SideBarContext';

interface Props {
  categories: CategoryMenuType[];
}

export default function MenuSideBar({ categories }: Props) {
  const { isOpen } = useModalContext();

  return (
    <aside
      className={cn(
        'fixed top-0 left-0 z-[3000] w-full h-full ',
        'bg-background backdrop-filter backdrop-blur-xl backdrop-opacity-90',
        'transition-transform duration-300 ease-in-out',
        isOpen ? 'translate-x-' : '-translate-x-full'
      )}
    >
      <div className="w-full h-full  max-w-[var(--base-w)] mx-auto">
        <MenuTop />
        <MenuCategoryList categories={categories} />
        <MenuBannerList />
      </div>
    </aside>
  );
}
