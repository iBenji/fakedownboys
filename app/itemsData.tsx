import * as React from "react";
import { Badge } from "@/components/ui/badge";

export const newsItems = [
  {
    title: "Воздухозаборник в ПТФ",
    tgref: "https://t.me/fakedownboysprints/26",
    description: "Появились в наличии воздухозаборники ПТФ для BMW E36",
    badge: <Badge variant="default">E36</Badge>,
  },
  {
    title: "BiXenon крепления ПТФ",
    tgref: "https://t.me/fakedownboysprints/31",
    description: "В наличии переходники для BMW E34 Bixenon",
    badge: <Badge variant="default">E34</Badge>,
  },
  {
    title: "BiLed крепления ближнего света",
    tgref: "https://t.me/fakedownboysprints/21",
    description: "Новые крепления ближнего света BiLed для BMW E34",
    badge: <Badge variant="default">E34</Badge>,
  },
];

export const saloonItems = [
  {
    title: "Клипсы пластика динамиков",
    href: "https://t.me/trepang666",
    price: "37 ₽",
    priceDescription: "Цена за 1 шт.",
    description:
      "Клипсы пластика передних динамиков, находится в ногах переднего пассажира и водителя",
    //badge: <Badge variant="default">Новое</Badge>,
    inStock: <Badge variant="default">В наличии</Badge>,
    art: <Badge variant="default">FBS00003</Badge>,
    image: "/images/saloon1.png",
  },
  {
    title: "Заглушки болтов дверных карт",
    href: "https://t.me/trepang666",
    price: "37 ₽",
    priceDescription: "Цена за 1 шт.",
    description:
      "Заглушки болтов дверных карт, отличная замена оригинальным заглушкам",
    inStock: <Badge variant="default">В наличии</Badge>,
    art: <Badge variant="default">FBS00002</Badge>,
    image: "/images/saloon2.png",
  },
  {
    title: "Клипса задней панели",
    href: "https://t.me/trepang666",
    price: "37 ₽",
    priceDescription: "Цена за 1 шт.",
    description: "Находится в задней части автомобиля",
    inStock: <Badge variant="default">В наличии</Badge>,
    art: <Badge variant="default">FBS00012</Badge>,
    image: "/images/saloon3.png",
  },
  {
    title: "Клипса обшивки багажника",
    href: "https://t.me/trepang666",
    price: "37 ₽",
    priceDescription: "Цена за 1 шт.",
    description:
      "Клипса обшивки багажника для фиксации карпета багажного отделения",
    inStock: <Badge variant="default">В наличии</Badge>,
    art: <Badge variant="default">FBS00006</Badge>,
    image: "/images/saloon4.png",
  },
  {
    title: "Воздушный дефлектор под датчик",
    href: "https://t.me/trepang666",
    price: "430 ₽",
    priceDescription: "Цена за 1 шт.",
    description:
      "Центральный воздушный дефлектор под датчик 52мм, отлично подойдет для тюнинга автомобиля",
    badge: <Badge variant="default">E34</Badge>,
    inStock: <Badge variant="default">В наличии</Badge>,
    art: <Badge variant="default">FBS00018</Badge>,
    image: "/images/saloon5.png",
  },
  {
    title: "Клипса лобового стекла",
    href: "https://t.me/trepang666",
    price: "15 ₽",
    priceDescription: "Цена за 1 шт.",
    description: "FAKEDOWNBOYS Prints | Печать запчастей для BMW E34, BMW E36",
    inStock: <Badge variant="default">В наличии</Badge>,
    art: <Badge variant="default">FBS00008</Badge>,
    image: "/images/saloon6.png",
  },
  {
    title: "Площадка кнопки люка",
    href: "https://t.me/trepang666",
    price: "990 ₽",
    priceDescription: "Цена за 1 шт.",
    description: "Площадка кнопки люка из PET-G пластика. Отличная замена оригинальной площадки.",
    badge: <Badge variant="default">E34</Badge>,
    inStock: <Badge variant="destructive">Под заказ</Badge>,
    art: <Badge variant="default">FBS00007</Badge>,
    image: "/images/saloon7.jpg",
  },
  {
    title: "Воздушный дефлектор под датчик ",
    href: "https://t.me/trepang666",
    price: "690 ₽",
    priceDescription: "Цена за 1 шт.",
    description:
      "Боковой (маленький) воздушный дефлектор под датчик 52мм, отлично подойдет для тюнинга автомобиля",
    badge: <Badge variant="default">E30</Badge>,
    inStock: <Badge variant="destructive">Под заказ</Badge>,
    art: <Badge variant="default">FBS00016</Badge>,
    image: "/images/saloon9.jpg",
  },
  {
    title: "Воздушный дефлектор под датчик",
    href: "https://t.me/trepang666",
    price: "1290 ₽",
    priceDescription: "Цена за 1 шт.",
    description:
      "Центральный (большой) воздушный дефлектор под датчик 52мм, отлично подойдет для тюнинга автомобиля",
    badge: <Badge variant="default">E30</Badge>,
    inStock: <Badge variant="destructive">Под заказ</Badge>,
    art: <Badge variant="default">FBS00017</Badge>,
    image: "/images/saloon8.jpg",
  },
];

export const bodyPartsItems = [
  {
    title: "Воздухозаборник в ПТФ",
    href: "https://t.me/trepang666",
    abouthref: "https://t.me/fakedownboysprints/25?single",
    price: "1490 ₽",
    priceDescription: "Цена за 1 шт.",
    badge: <Badge variant="default">E36</Badge>,
    inStock: <Badge variant="default">В наличии</Badge>,
    art: <Badge variant="default">FBS00014</Badge>,
    description:
      "Воздухозаборник в передний бампер для BMW E36, может быть использована, как система обдува тормозов",
    image: "/images/bp2.jpg",
  },
  {
    title: "BiLed крепления ближнего света",
    href: "https://t.me/trepang666",
    abouthref: "https://t.me/fakedownboysprints/20",
    price: "1990 ₽",
    priceDescription: "Цена за 1 комплект (Л + П).",
    badge: <Badge variant="default">E34</Badge>,
    inStock: <Badge variant="default">В наличии</Badge>,
    art: <Badge variant="default">FBS00013</Badge>,
    description:
      "BiLed крепления ближнего света для BMW E34, это полная замена штатных креплений линз",
    image: "/images/bp1.jpg",
  },
  {
    title: "BiXenon крепления ПТФ",
    href: "https://t.me/trepang666",
    abouthref: "https://t.me/trepang666",
    price: "1990 ₽",
    priceDescription: "Цена за 1 комплект (Л + П).",
    badge: <Badge variant="default">E34</Badge>,
    inStock: <Badge variant="default">В наличии</Badge>,
    art: <Badge variant="default">FBS00015</Badge>,
    description:
      "BiXenon крепления ближнего света для BMW E34, это полная замена штатных креплений линз",
    image: "/images/bp3.jpg",
  },
  {
    title: "Резиновый уплотнитель рамки ноздрей",
    href: "https://t.me/trepang666",
    abouthref: "https://t.me/trepang666",
    price: "300 ₽",
    priceDescription: "Цена за 1 штуку.",
    badge: <Badge variant="default">E34</Badge>,
    inStock: <Badge variant="default">В наличии</Badge>,
    art: <Badge variant="default">FBS00020</Badge>,
    description:
      "Резиновый уплотнитель, который невозможно купить отдельно, изначально он входит в комплект с новыми ноздрями по заводу.",
    image: "/images/bp4.jpg",
  },
];
