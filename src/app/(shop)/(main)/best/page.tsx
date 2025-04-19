import { getAllCategories } from '@/actions/category-service';
import BestProductList from '@/components/pages/best/BestProductList';
import CategoryCarousel from '@/components/pages/products/CategoryCarousel';
import { getProductDataType } from '@/types/RequestDataTypes';

export default async function page({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | undefined>>;
}) {
  const [categoryData, params] = await Promise.all([
    getAllCategories(),
    searchParams,
  ]);

  const categoryItems = categoryData.map((category) => ({
    id: category.id,
    name: category.name,
  }));

  const productQueryParams: getProductDataType = {
    categoryId: params.category
      ? Number(params.category)
      : Number(categoryItems[0].id),
    pageSize: 30,
  };

  return (
    <main>
      <CategoryCarousel categories={categoryItems} carouselType="best" />
      <BestProductList params={productQueryParams} />
    </main>
  );
}
