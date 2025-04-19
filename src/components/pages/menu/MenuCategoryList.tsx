import RightArrowIcon from '@/components/ui/icons/RightArrowIcon';
import { CategoryMenuType } from '@/types/ResponseDataTypes';
import Link from 'next/link';
import CategoryItem from './CategoryItem';
import { useModalContext } from '@/context/SideBarContext';
import { useRouter } from 'next/navigation';

interface Props {
  categories: CategoryMenuType[];
}

export default function MenuCategoryList({ categories }: Props) {
  const router = useRouter();
  const { setIsOpen } = useModalContext();

  const handleClickCategory = (categoryId: string) => {
    setIsOpen(false);
    if (categoryId === 'all') {
      router.push('/products');
      return;
    }
    router.push(`/products?category=${categoryId}`);
  };
  return (
    <section className="px-6 py-7 bg-background">
      <nav className="flex justify-end pb-4.5">
        <p
          className="text-xs font-body text-gray-1 flex items-center space-x-1
          cursor-pointer"
          onClick={() => handleClickCategory('all')}
        >
          <span>전체 상품 보기</span>
          <RightArrowIcon />
        </p>
      </nav>

      <ul
        id="menu-category-list-title"
        className="grid grid-cols-3 gap-x-5.1 gap-y-5 place-items-center"
      >
        {categories.map((category) => (
          <CategoryItem
            category={category}
            handler={handleClickCategory}
            key={category.id}
          />
        ))}
      </ul>
    </section>
  );
}
