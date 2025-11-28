"use client"
import { useEffect, useRef, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import "swiper/css"

const BANNER_DATA = [
    {
        id: '1',
        image: "https://ucarecdn.com/afa3ab8c-db23-4b8d-9d10-51d327103ef0/-/preview/1536x640/",
        mobileImage: "https://ucarecdn.com/39d727c7-ef42-4a1b-ac33-8f2a206ab8ea/-/preview/630x1000/",
        title: `Разработка
IT-решений и контекстная реклама`,
        buttonText: "Оставить заявку",
        titleColor: "#101010",
        buttonColor: "#101010",
        inButtonColor: "#FFFFFF"
    },
    {
        id: '2',
        image: "https://ucarecdn.com/42c068df-e9c4-4a8d-91c5-3455a4060c03/-/preview/1536x640/",
        mobileImage: "https://ucarecdn.com/3fb60cd2-960a-47b0-99b3-7d6bec13decb/-/preview/630x1000/",
        title: "IT решения: сайты, боты, интеграции",
        buttonText: "Оставить заявку",
        titleColor: "#FFFFFF",
        buttonColor: "#FFFFFF",
        inButtonColor: "#101010"
    },
    {
        id: '3',
        image: "https://ucarecdn.com/caa7d789-8c97-41fc-8c36-e6fe86d5de1f/-/preview/1536x640/",
        mobileImage: "https://ucarecdn.com/3c228fb7-6783-4d34-a6c9-31175eb54669/-/preview/630x1000/",
        title: "Контекстная реклама: от А до Я",
        buttonText: "Оставить заявку",
        titleColor: "#FFFFFF",
        buttonColor: "#101010",
        inButtonColor: "#FFFFFF"
    }
]

export const Banner = () => {
    const swiperRef = useRef<any>(null)
    const [activeIndex, setActiveIndex] = useState(0)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1024)
        handleResize() 
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])


    return (
        <section className="lg:mt-5 mt-3 px-4 lg:px-36 flex flex-col gap-6">

            <div className="relative w-full lg:h-[550px] h-[520px] overflow-hidden rounded-3xl">

                <Swiper
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                    slidesPerView={1}
                    speed={600}
                    spaceBetween={10}

                    className="w-full h-full"
                >
                    {BANNER_DATA.map((slide) => (
                        <SwiperSlide key={slide.id}>

                            <div className="relative w-full h-full rounded-[40px] overflow-hidden bg-cover bg-center bg-no-repeat"
                                style={{
                                    backgroundImage: `url(${isMobile ? slide.mobileImage : slide.image})`
                                }}>

                                {/* IMAGE BACKGROUND */}


                                {/* TEXT */}
                                <div className="absolute bottom-[25px] px-4 lg:px-0 gap-[15px]  lg:bottom-[60px] lg:left-[50px] z-10 lg:max-w-[600px] flex flex-col lg:gap-6">

                                    <h1
                                        className={`text-[29px] leading-[100%] ${isMobile && "whitespace-pre-wrap"} lg:text-[50px] font-bold`}
                                        style={{ color: slide.titleColor }}
                                    >
                                        {slide.title}
                                    </h1>

                                    <button
                                        className="px-6 py-3 h-[50px] hover:opacity-90 rounded-xl font-bold text-[15px] w-full  lg:w-max"
                                        style={{
                                            backgroundColor: slide.buttonColor,
                                            color: slide.inButtonColor
                                        }}
                                    >
                                        {slide.buttonText}
                                    </button>

                                </div>

                            </div>

                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* PAGINATION & ARROWS */}


            </div>

            <div className="w-full flex items-center justify-between">

                <div className="flex gap-2">
                    {BANNER_DATA.map((_, idx) => (
                        <div
                            key={idx}
                            onClick={() => swiperRef.current?.slideTo(idx)} // shu joy qo'shildi
                            className={`h-[3px] rounded-full cursor-pointer transition-all ${activeIndex === idx
                                    ? "w-[34px] bg-black lg:w-[50px]"
                                    : "w-[34px] lg:w-[45px] bg-gray-300"
                                }`}
                        ></div>
                    ))}
                </div>

                <div className="flex items-center gap-3">
                    <button
                        onClick={() => swiperRef.current.slidePrev()}
                        className="size-[50px] flex items-center lg:size-[60px] justify-center rounded-full bg-[#EEF0F2] shadow"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <button
                        onClick={() => swiperRef.current.slideNext()}
                        className="size-[50px] flex items-center lg:size-[60px] justify-center rounded-full bg-[#EEF0F2] shadow"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>

            </div>

        </section>
    )
}
