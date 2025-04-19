import CategoryCarousel from './CategoryCarousel';
import CategoryOptionCarousel from './CategoryOptionCarousel';
import { CategoryMenuType } from '@/types/ResponseDataTypes';
import {
  getSeasonDatas,
  getSubCategoriesByCategoryid,
} from '@/actions/category-service';

export default async function ProductFilterList({
  categoryItems,
  selectedCategory,
}: {
  categoryItems: {
    id: number;
    name: string;
  }[];
  selectedCategory?: CategoryMenuType;
}) {
  const subCategories = selectedCategory
    ? await getSubCategoriesByCategoryid(selectedCategory.id)
    : undefined;
  const seasons = await getSeasonDatas();

  return (
    <>
      <CategoryCarousel categories={categoryItems} />
      {subCategories && subCategories.length > 0 && (
        <CategoryOptionCarousel
          items={subCategories.map(({ id, name }) => ({
            id,
            name,
          }))}
          title="카테고리"
          type="subCategory"
        />
      )}
      <CategoryOptionCarousel
        items={seasons.map(({ id, name }) => ({ id, name }))}
        title="시즌"
        type="season"
      />
    </>
  );
}
