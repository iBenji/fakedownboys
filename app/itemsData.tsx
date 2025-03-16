import * as React from "react";
import { Badge } from "@/components/ui/badge";

export const newsItems = [
  {
    title: "Воздухозаборник в ПТФ",
    href: "/docs/primitives/alert-dialog",
    description:
      "Появились в наличии воздухозаборники ПТФ для BMW E36",
    badge: <Badge variant="default">E36</Badge>,
  },
  {
    title: "BiXenon крепления ПТФ",
    href: "/docs/primitives/hover-card",
    description: "В наличии переходники для BMW E34 Bixenon",
    badge: <Badge variant="default">E34</Badge>,
  },
  {
    title: "BiLed крепления ближнего света",
    href: "/catalog/bodyparts",
    description:
      "Новые крепления ближнего света BiLed для BMW E34",
      badge: <Badge variant="default">E34</Badge>,
  },
];

export const saloonItems = [
  {
    title: "Клипсы пластика динамиков",
    href: "https://t.me/trepang666",
    price: "60 ₽",
    priceDescription: "Цена за 1 шт.",
    description:
      "Клипсы пластика передних динамиков, находится в ногах переднего пассажира и водителя",
    //badge: <Badge variant="default">Новое</Badge>,
    inStock: <Badge variant="default">В наличии</Badge>,
    image: "/images/saloon1.png",
  },
  {
    title: "Заглушки болтов дверных карт",
    href: "https://t.me/trepang666",
    price: "60 ₽",
    priceDescription: "Цена за 1 шт.",
    description:
      "Заглушки болтов дверных карт, отличная замена оригинальным заглушкам",
    inStock: <Badge variant="default">В наличии</Badge>,
    image: "/images/saloon2.png",
  },
  {
    title: "Клипса задней панели",
    href: "https://t.me/trepang666",
    price: "60 ₽",
    priceDescription: "Цена за 1 шт.",
    description: "Находится в задней части автомобиля",
    inStock: <Badge variant="default">В наличии</Badge>,
    image: "/images/saloon3.png",
  },
  {
    title: "Клипса обшивки багажника",
    href: "https://t.me/trepang666",
    price: "60 ₽",
    priceDescription: "Цена за 1 шт.",
    description:
      "Клипса обшивки багажника для фиксации карпета багажного отделения",
    inStock: <Badge variant="default">В наличии</Badge>,
    image: "/images/saloon4.png",
  },
  {
    title: "Воздушный дефлектор под датчик",
    href: "https://t.me/trepang666",
    price: "430 ₽",
    priceDescription: "Цена за 1 шт.",
    description:
      "Центральный воздушный дефлектор под датчик 52мм, отлично подойдет для тюнинга автомобиля",
    inStock: <Badge variant="default">В наличии</Badge>,
    image: "/images/saloon5.png",
  },
  {
    title: "Клипса лобового стекла",
    href: "https://t.me/trepang666",
    price: "30 ₽",
    priceDescription: "Цена за 1 шт.",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    inStock: <Badge variant="default">В наличии</Badge>,
    image: "/images/saloon6.png",
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
    description:
      "BiXenon крепления ближнего света для BMW E34, это полная замена штатных креплений линз",
    image: "/images/bp1.jpg",
  },
];
