"use client";
import { useTranslation } from "react-i18next";
import productsData from "../data/products.json";
import arTranslations from "../../locales/ar/products.json";
import enTranslations from "../../locales/en/products.json";
import i18n from "../../i18n";

export default function BrandsProducts() {
  const { t } = useTranslation();
  const isArabic = i18n.language === "ar";
  const productTranslations = isArabic ? arTranslations : enTranslations;

  // Group products by brand
  const groupedProducts = productsData.reduce((acc, product) => {
    if (!acc[product.brand]) acc[product.brand] = [];
    acc[product.brand].push(product);
    return acc;
  }, {});

  return (
    <section className="py-10 px-4 md:px-12">
      {Object.entries(groupedProducts).map(([brandName, products]) => (
        <div key={brandName} className="mb-16">
          <h2 className="text-2xl font-bold mb-6">{brandName}</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => {
              const translation = productTranslations[product.id.toString()];
              return (
                <div
                  key={product.id}
                  className="bg-white rounded-md shadow-md p-4 hover:shadow-xl transition duration-300 relative"
                >
                  <img
                    src={product.image}
                    alt={translation?.name || product.name}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <p className="text-sm text-gray-500">
                    {translation?.description || product.description}
                  </p>
                  <h3 className="font-semibold text-lg">
                    {translation?.name || product.name}
                  </h3>
                  <p className="text-[#4ca1ff] font-bold mt-2">
                    {product.price.toFixed(2)} {isArabic ? "ر.س" : "SAR"}
                  </p>
                  <button className="mt-4 text-sm border px-4 py-1 rounded-md border-[#4ca1ff] text-[#4ca1ff] hover:bg-[#4ca1ff] hover:text-white transition">
                    {t("addToCart")}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </section>
  );
}
