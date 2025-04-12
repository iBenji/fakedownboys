import News from "./dashboard/page";
import { Analytics } from "@vercel/analytics/react";

export default function RootPage() {
  return (
    <>
      <Analytics />
      <News></News>
    </>
  );
}
