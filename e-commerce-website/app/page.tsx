import { Banner,  ProductsList } from "@/components";
import { apiData, banner } from "@/constants/data";

export default function Home() {
  return (
      <div className="w-full h-full relative">
        <Banner data={banner} />
        <ProductsList apiData={{ apiData }} />
      </div>
  );
}
