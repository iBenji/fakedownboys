"use client";
import "@/app/globals.css";
import Header from "../../header";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { bodyPartsItems } from "@/app/itemsData";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import * as Tooltip from "@radix-ui/react-tooltip";
import TGIcon from "@/public/icons/Telegram.svg";

interface bodyPartsItem {
  title: string;
  image: string;
  description: string;
  priceDescription: string;
  badge?: React.ReactNode;
  inStock?: React.ReactNode;
  href: string;
  abouthref: string;
  price: string;
}

const BodypartsPage = () => {
  const [currentPage, setCurrentPage] = useState(0); // Текущая страница
  const itemsPerPage = 6; // Количество товаров на странице

  // Вычисляем индексы для текущей страницы
  const offset = currentPage * itemsPerPage;
  const currentItems = bodyPartsItems.slice(offset, offset + itemsPerPage);

  // Обработчик изменения страницы
  const handlePageClick = (selectedPage: { selected: number }) => {
    setCurrentPage(selectedPage.selected);
  };

  return (
    <>
      <Header />
      <main className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div className="mb-4">Детали салона</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentItems.map((bodyPartsItem: bodyPartsItem) => (
            <Card
              key={bodyPartsItem.title}
              className="rounded-md shadow-md flex flex-col justify-between w-full max-w-md"
            >
              <CardHeader>
                <CardTitle className="text-lg font-medium">
                  {bodyPartsItem.title}
                </CardTitle>
                <div className="image-container relative flex items-center justify-center h-48">
                  <Image
                    src={bodyPartsItem.image}
                    alt={bodyPartsItem.title}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm text-muted-foreground">
                  {bodyPartsItem.description}
                </CardDescription>
                <div className="flex flex-row justify-between">
                  {bodyPartsItem.badge && (
                    <div className="mt-2">{bodyPartsItem.badge}</div>
                  )}
                  {bodyPartsItem.inStock && (
                    <div className="mt-2">{bodyPartsItem.inStock}</div>
                  )}
                </div>
              </CardContent>
              <CardFooter className="mt-auto px-4 py-2 w-full">
                <div className="flex flex-wrap justify-between w-full">
                  <Link href={bodyPartsItem.href} className="flex-1 mr-2">
                    <Button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Заказать
                    </Button>
                  </Link>
                  <Link href={bodyPartsItem.abouthref} className="about-button flex-1 mr-2">
                    <Button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Подробнее
                      <Image
                        src={TGIcon}
                        alt="Telegram"
                        width={20}
                        height={20}
                      />
                    </Button>
                  </Link>
                  {/* Кнопка с Tooltip */}
                  <Tooltip.Provider>
                    <Tooltip.Root>
                      <Tooltip.Trigger asChild>
                        <Button className="price-button flex-1 bg-transparent border border-green-500 hover:bg-transparent cursor-default text-white font-light py-2 px-4 rounded">
                          {bodyPartsItem.price}
                        </Button>
                      </Tooltip.Trigger>
                      <Tooltip.Content
                        side="top"
                        className="bg-gray-800 text-white text-sm px-3 py-2 rounded-md shadow-lg"
                      >
                        {bodyPartsItem.priceDescription}{" "}
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
          pageCount={Math.ceil(bodyPartsItems.length / itemsPerPage)}
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

export default BodypartsPage;
