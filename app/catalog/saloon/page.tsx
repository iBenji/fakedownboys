"use client";
import Header from "../../header";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { saloonItems } from "@/app/itemsData";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import * as Tooltip from "@radix-ui/react-tooltip";
import Head from "next/head";
import Script from "next/script";

interface SaloonItem {
  title: string;
  image: string;
  description: string;
  badge?: React.ReactNode;
  inStock?: React.ReactNode;
  href: string;
  price: string;
  priceDescription: string;
}

const SaloonPage = () => {
  const [currentPage, setCurrentPage] = useState(0); // Текущая страница
  const itemsPerPage = 6; // Количество товаров на странице

  // Вычисляем индексы для текущей страницы
  const offset = currentPage * itemsPerPage;
  const currentItems = saloonItems.slice(offset, offset + itemsPerPage);

  // Обработчик изменения страницы
  const handlePageClick = (selectedPage: { selected: number }) => {
    setCurrentPage(selectedPage.selected);
  };

  return (
    <>
      <Head>
        <title>Детали салона | Магазин запчастей для BMW</title>
        <meta
          name="description"
          content="Широкий ассортимент деталей салона для BMW E34. Качественные запчасти по доступным ценам."
        />
        <meta name="keywords" content="BMW, запчасти, салон, E34, авто" />
        <meta
          property="og:title"
          content="Детали салона | Магазин запчастей для BMW"
        />
        <meta
          property="og:description"
          content="Широкий ассортимент деталей салона для BMW E34. Качественные запчасти по доступным ценам."
        />
        <meta property="og:image" content="/images/saloon-og.jpg" />
      </Head>

      {/* Яндекс.Метрика */}
      <Script id="yandex-metrica" strategy="afterInteractive" type="text/javascript">
        {`
          (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();
   for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(100381400, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });
        `}
      </Script>
      <noscript><div><img src="https://mc.yandex.ru/watch/100381400" alt="" /></div></noscript>

      <Header />
      <main className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div className="mb-4">Детали салона</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentItems.map((saloonItem: SaloonItem) => (
            <Card
              key={saloonItem.title}
              className="rounded-md shadow-md flex flex-col justify-between w-full max-w-md"
            >
              <CardHeader>
                <CardTitle className="text-lg font-medium">
                  {saloonItem.title}
                </CardTitle>
                <div className="image-container relative flex items-center justify-center h-48">
                  <Image
                    src={saloonItem.image}
                    alt={saloonItem.title}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm text-muted-foreground">
                  {saloonItem.description}
                </CardDescription>
                <div className="flex flex-row justify-between">
                  {saloonItem.badge && (
                    <div className="mt-2">{saloonItem.badge}</div>
                  )}
                  {saloonItem.inStock && (
                    <div className="mt-2">{saloonItem.inStock}</div>
                  )}
                </div>
              </CardContent>
              <CardFooter className="mt-auto px-4 py-2 w-full">
                <div className="flex justify-between w-full">
                  <Link href={saloonItem.href} className="flex-1 mr-2">
                    <Button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Заказать
                    </Button>
                  </Link>
                  {/* Кнопка с Tooltip */}
                  <Tooltip.Provider>
                    <Tooltip.Root>
                      <Tooltip.Trigger asChild>
                        <Button className="flex-1 bg-transparent border border-green-500 hover:bg-transparent cursor-default text-white font-light py-2 px-4 rounded">
                          {saloonItem.price}
                        </Button>
                      </Tooltip.Trigger>
                      <Tooltip.Content
                        side="top"
                        className="bg-gray-800 text-white text-sm px-3 py-2 rounded-md shadow-lg"
                      >
                        {saloonItem.priceDescription}{" "}
                        <Tooltip.Arrow className="fill-gray-800" />
                      </Tooltip.Content>
                    </Tooltip.Root>
                  </Tooltip.Provider>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Пагинация */}
        <ReactPaginate
          previousLabel={"← Назад"}
          nextLabel={"Вперед →"}
          pageCount={Math.ceil(saloonItems.length / itemsPerPage)}
          onPageChange={handlePageClick}
          containerClassName={"pagination flex justify-center gap-2 mt-8"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link"}
          disabledClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
        />
      </main>
    </>
  );
};

export default SaloonPage;
