import ProductGallery from "@/components/ProductGallery";
import ProductInfo from "@/components/ProductInfo";
import RecommendedProducts from "@/components/RecommendedProducts";
import FAQ from "@/components/FAQ";
import Reviews from "@/components/Reviews";
import { product } from "@/data/product";

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <div className="mb-12 grid gap-8 lg:grid-cols-2">
        <ProductGallery images={product.images} productName={product.name} />
        <ProductInfo />
      </div>

      <div className="mb-12">
        <h2 className="mb-4 text-2xl font-bold text-charcoal">Descripción</h2>
        <p className="max-w-3xl leading-relaxed text-charcoal-light">
          {product.longDescription}
        </p>
      </div>

      <div className="mb-12">
        <RecommendedProducts />
      </div>

      <div className="mb-12">
        <FAQ />
      </div>

      <div className="mb-12">
        <Reviews />
      </div>
    </div>
  );
}
