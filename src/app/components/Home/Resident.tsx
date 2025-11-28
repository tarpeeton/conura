"use client"
import Image from "next/image"
import { useState } from "react"


export const Rezident = () => {
    const [showText, setShowText] = useState(false)




    return (
        <section>


            <section className="px-6 lg:px-36  hidden lg:block lg:h-[900px] bg-cover bg-center bg-no-repeat relative"
                style={{ backgroundImage: `url(/bg.jpg)` }}>

                <div className="w-full flex flex-row items-center justify-between ">
                    <div className="flex flex-col justify-end lg:max-w-[670px] ">
                        <p className="text-[34px] text-end lg:text-[60px] lg:leading-[65px] text-[#04A8BF] leading-[37px] font-semibold">
                            Conura —
                        </p>
                        <p className="text-[34px] lg:text-[60px] lg:leading-[65px] text-[#101010] leading-[37px] font-semibold">
                            официальный резидент IT-парка
                        </p>

                    </div>
                    {/* image and */}
                    <div className="hidden lg:block">
                        {showText ? (
                            <button onClick={() => setShowText((prev) => !prev)} className="lg:w-[319px] text-left lg:h-[150px]">
                                <p className="text-[18px] font-medium text-[#3F3F3F]">Мы являемся официальным резидентом IT-Парка Узбекистана, </p>
                            </button>
                        ) : (
                            <button className="h-[97px] w-[110px]" onClick={() => setShowText((prev) => !prev)}>
                                <Image src={"https://ucarecdn.com/59980326-9885-4dbe-bb65-11d8ec0884e7/-/preview/438x387/"}
                                    alt="It Park Rezidenti"
                                    width={440}
                                    height={388}
                                    quality={100}
                                    className="w-full h-full" />
                            </button>
                        )}

                    </div>
                </div>

                <button className="hidden left-[270px] bottom-[201px] rounded-full lg:flex items-center absolute size-[140px] bg-[#101010] text-[#FFFFFF]">
                    <p className="font-bold text-[15px]">
                        Посмотреть сертификат
                    </p>
                </button>
            </section>

            {/* mobile versiya */}
            <section className="block lg:hidden">
                <div className="h-[266px]">
                    <Image
                        src={"https://ucarecdn.com/df01d3eb-5887-40c3-8938-d505fab7b1df/-/preview/1000x736/"}
                        alt="conura it park rezidenti rasmi"
                        width={1000}
                        height={736}
                        quality={100}
                        className="w-full h-full"
                    />
                </div>
                <div className="">
                    <div className="mt-5 px-4">
                        <h1 className="text-[34px] leading-[37px] font-semibold text-[#04A8BF]">
                            Conura —
                        </h1>
                        <h1 className="text-[34px] leading-[37px] font-semibold text-[#101010]">
                            официальный резидент IT-парка
                        </h1>
                        <p className="mt-[15px] text-[15px] whitespace-pre-wrap text-[#3F3F3F]">
                            {`Мы являемся официальным резидентом 
IT-Парка Узбекистана`}
                  </p>
                            <button className="mt-[30px] w-full bg-[#101010] hover:opacity-90 flex flex-row justify-center items-center gap-2.5 px-8 py-4 text-[#FFFFFF] rounded-[10px] ">
                    <div className="size-[23px]">
                        <Image
                            src={"https://ucarecdn.com/9c749ce8-2129-4062-a627-ccd49604e00a/-/preview/92x80/"}
                            alt="conura it park rezidenti rasmi"
                            width={92}
                            height={80}
                            quality={100}
                            className="w-full h-full"
                        />
                    </div>
                    <p className="font-bold">Посмотреть сертификат</p>
                    </button>
                    </div>
            </div>
  
            </section>
        </section>

    )
}