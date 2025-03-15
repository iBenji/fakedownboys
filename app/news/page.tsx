// page.tsx
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  
import { newsItems } from "@/app/itemsData"; // Импортируем newsItems
import { Button } from "@/components/ui/button";

interface NewsItem {
  title: string;
  description: string;
  badge?: React.ReactNode;
}

const NewsPage = () => {
  return (
    <main className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div  className="mb-4">
        Новости
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {newsItems.map((newsItem: NewsItem) => (
          <Card key={newsItem.title} className="rounded-md shadow-md flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="text-lg font-medium">{newsItem.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm text-muted-foreground">{newsItem.description}</CardDescription>
              {newsItem.badge && <div className="mt-2">{newsItem.badge}</div>}
            </CardContent>
            <CardFooter className="mt-auto">
              <div className="flex justify-end">
                <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Подробнее
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
};

export default NewsPage;