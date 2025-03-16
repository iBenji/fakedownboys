import Header from "../../header";

// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";

// import { saloonItems } from "@/app/header";
// import { Button } from "@/components/ui/button";
// import Image from "next/image"; // Импортируйте компонент Image из Next.js
// import Link from "next/link";

// interface ElectricItem {
//   title: string;
//   image: string; // Добавьте поле image
//   description: string;
//   badge?: React.ReactNode;
//   href: string;
// }

const ElectricPage = () => {
  return (
    <>
      <Header />
      <main className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h1>Здесь пока что пусто, но в скором времени появятся очень интересные проекты!</h1>
      </main>
    </>
  );
};

export default ElectricPage;
