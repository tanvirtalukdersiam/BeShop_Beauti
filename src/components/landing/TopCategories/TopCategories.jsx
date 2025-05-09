import { Categories } from "components/Category/Categories/Categories";
import { SectionTitle } from "components/shared/SectionTitle/SectionTitle";
import categoriesData from "data/category/category";

export const TopCategories = () => {
  const categories = [...categoriesData].slice(0, 3);
  return (
    <>
      {/* <!-- BEGIN TOP CATEGORIES --> */}
      <section className="top-categories">
        <SectionTitle
          subTitle="Popular collections"
          title="top categories of BeautyShop"
          body="Nourish your skin with toxin-free cosmetic products. With the offers that you can’t refuse."
        />
        <div className="top-categories__items">
          {<Categories categories={categories} />}
        </div>
      </section>
      {/* <!-- TOP CATEGORIES EOF   --> */}
    </>
  );
};
