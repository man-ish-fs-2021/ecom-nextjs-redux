import { Banner, Presenter, ProductsList } from "@/components";
import { apiData, banner } from "@/constants/data";


export default function Home() {
  return (
    <main className="flex h-screen w-screen">
      <Presenter>
        <Banner data={banner} />
        <ProductsList apiData={{apiData}} />
      </Presenter>
    </main>
  );
}
