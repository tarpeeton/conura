
import Image from "next/image"
import Link from "next/link"



const CASE = [
    {
        id: "11s345",
        title: "3500+ посетителей",
        description: "Бутербродский",
        image: "/cases/c2.jpg",
    },
    {
        id: "11sewr435345",
        title: "x2 увеличение продаж",
        description: "Голый Король",
        image: "/cases/shton.png",

    },
    {
        id: "11sdxc",
        title: "6000+ конверсий",
        description: "Эклеры с калом",
        image: "/cases/c4.jpg",

    },
]

export const Cases = () => {
    return (
        <section className="px-4 lg:px-36 lg:mt-20 ">
            <h5 className="text-[#101010] lg:text-[55px] text-[34px] font-semibold">
                Кейсы
            </h5>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:mt-[30px] mt-5">
                {/* left section */}
                <div className="flex flex-col justify-between">
                    <div>
                        <div className="lg:h-[420px] h-[265px] rounded-[20px] lg:rounded-[28px] overflow-hidden">
                            <Image
                                src={'/cases/c1.jpg'}
                                alt="case 1 image"
                                width={1000}
                                height={1000}
                                quality={90}
                                className="w-full h-full object-cover rounded-[20px] lg:rounded-[28px]" />

                        </div>
                        <div className="lg:mt-[25px] mt-[12px]">
                            <p className="lg:text-[28px] font-semibold text-[20px] ">1200+ посетителей</p>
                            <p className="mt-[5px] text-[14px] lg:text-[18px] text-[#787878] font-medium">
                                Больные Ублюдки
                            </p>
                        </div>
                    </div>


                    <div className=" hidden lg:flex flex-row lg:gap-5">
                        <button className="lg:size-[140px] rounded-full flex items-center text-center justify-center bg-[#101010] text-white text-[15px] font-bold">
                            ОСТАВИТЬ ЗАЯВКУ
                        </button>
                        <Link href={'/cases'} className="lg:size-[140px] rounded-full flex items-center text-center justify-center border border-[#101010]  text-[#101010] text-[15px] font-bold">
                            ВСЕ КЕЙСЫ
                        </Link>
                    </div>
                </div>





                {/* rigth section */}

               <div className="flex flex-col  gap-5  lg:gap-[15px]">
  {CASE.map((caseItem, index) => (
    <div key={caseItem.id || index} className="flex flex-col  lg:flex-row  lg:gap-[25px]">
      <div className="lg:h-[220px] h-[265px] lg:w-[315px] lg:max-w-[315px] lg:min-w-[315px] rounded-[28px] overflow-hidden">
        <Image
          src={caseItem.image}
          alt={caseItem.title || "case image"}
          width={1000}
          height={1000}
          quality={90}
          className="w-full h-full object-cover rounded-[24px]"
        />
      </div>
      <div className="flex flex-col mt-[12px] lg:mt-0">
        <p className="lg:text-[28px] text-[20px] font-semibold leading-[120%]">{caseItem.title}</p>
        <p className="mt-[5px] text-[14px] lg:text-[18px] text-[#787878] font-medium">
          {caseItem.description}
        </p>
      </div>
    </div>
  ))}
</div>
            </div>
        </section>
    )
}