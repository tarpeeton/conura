import { Banner } from "./components/Home/Banner";
import { Cases } from "./components/Home/Cases";
import { HomeForm } from "./components/Home/Form";
import  HowWeWork  from "./components/Home/HowWeWork";
import { Rezident } from "./components/Home/Resident";
import { Services } from "./components/Home/Services";

export default function Home() {
  return (
    <div className="flex flex-col gap-[60px] bg-[#FBFBFB]">
        <Banner />
        <Rezident />
        <Services />
        <HowWeWork />
        <Cases />
        <HomeForm />
    </div>
  );
}
