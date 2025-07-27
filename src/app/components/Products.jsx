"use client";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import i18n from "../../i18n";

export default function BrandsProducts() {
  const { t } = useTranslation();
  const isArabic = i18n.language === "ar";

  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProductsData(data);
         console.log("products:", data); 
        setLoading(false);
      });
  }, []);

  const groupedProducts = productsData.reduce((acc, product) => {
    if (!acc[product.brand]) acc[product.brand] = [];
    acc[product.brand].push(product);
    return acc;
  }, {});

  if (loading) return <div className="text-center py-10">{t("loading")}...</div>;

  return (
    <section className="py-10 px-4 md:px-12">
      {Object.entries(groupedProducts).map(([brandName, products]) => (
        <div key={brandName} className="mb-16">
          <h2 className="text-2xl font-bold mb-6">{brandName}</h2>

          <div dir={isArabic ? "rtl" : "ltr"} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Link href={`/product/${product.id}`} key={product.id}>
                <div className="bg-white rounded-md shadow-md p-4 hover:shadow-xl transition duration-300 cursor-pointer h-full">
                  <img
                    src={product.image}
                    alt={product.name[isArabic ? "ar" : "en"]}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <p className="text-sm text-gray-500 mb-1">
                    {product.description[isArabic ? "ar" : "en"]}
                  </p>
                  <h3 className="font-semibold text-lg mb-1">
                    {product.name[isArabic ? "ar" : "en"]}
                  </h3>
                  <p className="text-[#4ca1ff] font-bold">
                    {product.price.toFixed(2)} {isArabic ? "ر.س" : "SAR"}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
