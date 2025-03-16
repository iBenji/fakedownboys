import * as React from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import BMWLogo from "@/components/icons/bmw.png";
import Image from "next/image";
import { newsItems } from "@/app/itemsData"; // Импортируем newsItems

const news: {
  title: string;
  href: string;
  description: string;
  badge?: React.ReactNode;
}[] = [
  newsItems[0],
  newsItems[1],
  newsItems[2],
];


export default function header() {
  return (
    <div className="flex row flex-wrap justify-center md:justify-center font-[family-name:var(--font-geist-sans)] ">
      <header>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Каталог</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md p-6 no-underline outline-none focus:shadow-md"
                        href="/dashboard"
                      >
                        <Image 
                        src={BMWLogo}
                        alt="FAKEDOWNBOYS Prints"
                        />
                        <div className="mb-2 mt-4 text-lg font-medium">
                          FAKEDOWNBOYS
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Мы проектируем, создаем редкие, а так же кастомные
                          комплектации и решения.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/catalog/saloon" title="Детали салона">
                    Кастомные комплектации салона.
                  </ListItem>
                  <ListItem href="/catalog/electric" title="Электрика">
                    Разъемы, фишки, кнопки, эбу.
                  </ListItem>
                  <ListItem
                    href="/catalog/bodyparts"
                    title="Кузовные детали"
                  >
                    Пластиковые детали кузова, подкапотного пространства.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Новости</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  {news.map((newsItem) => (
                    <ListItem
                      key={newsItem.title}
                      title={newsItem.title}
                      href={newsItem.href}
                      badge={newsItem.badge}
                    >
                      {newsItem.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </header>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { badge?: React.ReactNode }
>(({ className, title, children, badge, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium leading-none">{title}</div>
            {badge}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";