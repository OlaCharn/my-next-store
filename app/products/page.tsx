
import ProductsContainer from "@/components/products/ProductsContainer";
export default async function ProductsPage({
  searchParams,
}: {
  searchParams: { layout?: string; search?: string };
}) {
  // Дожидаемся получения параметров
  const params = await searchParams; 

  const layout = params.layout || 'grid';
  const search = params.search || '';

  return (
    <>
      <ProductsContainer layout={layout} search={search} />
    </>
  );
}


/*
async function ProductsPage({
  searchParams,
}: {
  searchParams: { layout?: string; search?: string };
}) {
  const layout =  searchParams.layout || 'grid';
  const search =  searchParams.search || '';
  return (
    <>
      <ProductsContainer layout={layout} search={search} />
    </>
  );
}
export default ProductsPage;
*/