"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

const SERVICES = [
    {
        id: "1",
        name: "Контекстная реклама",
        icon: "https://ucarecdn.com/6981f1f7-4b55-4d79-b1d5-83eb8beb5bfb/-/preview/160x160/",
        activeIcon: 'https://ucarecdn.com/0d14df86-81dd-4b08-ae2d-a63f84146ac7/-/preview/96x96/',
        children: {
            image: "https://ucarecdn.com/1463356b-3782-4c0a-ab1e-196c32b05f8b/-/preview/919x1000/",
            serviceName: "Контекстная реклама",
            serviceDescription: "Привлекаем клиентов через поисковые системы и площадки, показывая объявления именно тем, кто ищет ваш продукт",
            href: "/services/kontekst-reklama"
        }
    },
    {
        id: "2",
        name: "Сайты",
        icon: "https://ucarecdn.com/e3bfd2f6-4493-4012-8739-9589944c40c0/-/preview/96x96/",
        activeIcon: 'https://ucarecdn.com/346de027-5561-4a20-b55b-c155e8a37778/-/preview/96x96/',

        children: {
            image: "https://ucarecdn.com/faadf705-15e5-4263-8c70-569da40a3605/-/preview/919x1000/",
            serviceName: "Сайты",
            serviceDescription: "Создаём удобные и понятные сайты, которые отражают суть бизнеса и упрощают взаимодействие с клиентами",
            href: "/services/web-sites"
        }
    },
    {
        id: "3",
        name: "Боты",
        icon: "https://ucarecdn.com/a14a0e1a-874d-4411-a76f-83db5e9202fe/-/preview/96x96/",
        activeIcon: 'https://ucarecdn.com/44644893-a4b4-4912-89e5-6a368fbbcefd/-/preview/96x96/',

        children: {
            image: "https://ucarecdn.com/7a17a6f2-8a1d-4477-9463-ecfccc838716/-/preview/919x1000/",
            serviceName: "Боты",
            serviceDescription: "Программные решения, которые автоматизируют задачи — от клиентских сервисов до внутренних бизнес-процессов",
            href: "/services/bots"
        }
    },
    {
        id: "4",
        name: "Интеграции",
        icon: "https://ucarecdn.com/5e3e5c69-fe9c-4ff2-aa9c-7f7852b31223/-/preview/96x96/",
        activeIcon: 'https://ucarecdn.com/fcc49b0b-19f7-4440-ac8e-2131e034769b/-/preview/96x96/',

        children: {
            image: "https://ucarecdn.com/8edf4431-88aa-449e-8a54-e8a88033dbc2/-/preview/919x1000/",
            serviceName: "Интеграции",
            serviceDescription: "Cоединяют разные сервисы и программы в единую цепочку, чтобы данные передавались автоматически и без ошибок",
            href: "/services/integratsiya"
        }
    }
]

export const Services = () => {
    const [activeSer, setActiveSer] = useState(SERVICES[1].id)
    const activeData = SERVICES.find(s => s.id === activeSer)




    return (
        <section className="px-4 lg:px-36">
            <h2 className="text-[#101010] lg:text-[55px] text-[34px] font-semibold">Услуги</h2>

            <div className="mt-[30px] lg:mt-[35px] grid grid-cols-1 lg:grid-cols-3 lg:gap-10">
                <div className="flex flex-col">
                    {SERVICES.map((item, index) => (
                        <div key={item.id} className="border-y border-y-[#E9E9E9] lg:border-b lg:border-b-[#E9E9E9]">

                            {/* BUTTON */}
                            <button
                                onClick={() => {
                                    const isMobile = window.innerWidth < 1024;

                                    if (isMobile) {
                                        // agar mobileda bir xil elementga bosilsa — yopilsin
                                        setActiveSer(prev => prev === item.id ? null : item.id);
                                    } else {
                                        // desktopda yopilish kerak emas
                                        setActiveSer(item.id);
                                    }
                                }}

                                className="flex items-center justify-between w-full py-6 lg:py-8"
                            >
                                <div className="flex items-center gap-4">

                                    {/* ICON LOGIC — 0-index uchun alohida */}
                                    {index === 0 && activeSer !== item.id ? (
                                        <div className="size-11">
                                            <Image src={item.icon} width={90} height={90} alt="" />
                                        </div>
                                    ) : (
                                        <div className={`rounded-[10px] p-2.5 ${activeSer === item.id ? "bg-[#101010]" : "bg-[#EEF0F2]"}`}>
                                            <div className="size-6">
                                                <Image
                                                    src={activeSer === item.id ? item.activeIcon : item.icon}
                                                    width={90}
                                                    height={90}
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    )}

                                    {/* TEXT LOGIC */}
                                    <span className={`
                    lg:text-[24px] font-medium text-[20px]
                    ${index === 0 && activeSer !== item.id ? "text-[#04A8BF]" : ""}
                    ${activeSer === item.id ? "text-black" : ""}
                    ${index !== 0 && activeSer !== item.id ? "text-[#737373]" : ""}
                `}>
                                        {item.name}
                                    </span>
                                </div>

                                {/* MOBILE TOGGLE ICON */}
                                <div className="lg:hidden size-[30px]">
                                    {activeSer === item.id ? (
                                        <Image src="https://ucarecdn.com/bc974088-3ca9-4c04-b722-48f0a708d988/-/preview/120x120/" width={50} height={50} alt="active plus icon" />
                                    ) : (
                                        <Image src="https://ucarecdn.com/8d950be9-44ed-4304-9dbc-70051a87e3ee/-/preview/30x30/" width={50} height={50} alt="close active icon" />
                                    )}
                                </div>
                            </button>

                            {/* MOBILE ACCORDION CONTENT */}
                            {activeSer === item.id && (
                                <div className="lg:hidden mt-5 pb-[25px]" >
                                    <div className="flex flex-col">
                                        <Image
                                            src={item.children.image}
                                            width={900}
                                            height={900}
                                            className="rounded-[20px] h-[357px] w-full "
                                            alt="service image"
                                        />
                                        <p className="text-[#3F3F3F]  mt-[15px] leading-[100%] text-[15px]">
                                            {item.children.serviceDescription}
                                        </p>

                                        <Link
                                            href={item.children.href}
                                            className="bg-[#101010] text-white text-center text-[15px] hover:opacity-90 rounded-[10px] py-4 mt-5 font-bold"
                                        >
                                            Подробнее
                                        </Link>
                                    </div>
                                </div>
                            )}

                        </div>
                    ))}

                </div>

                <div className="col-span-2 mt-8 lg:mt-0 hidden lg:block">
                    {activeData && (
                        <div className="flex flex-col lg:flex-row items-start gap-10">
                            <div className="w-full lg:w-1/2 h-full">
                                <Image
                                    src={activeData.children.image}
                                    alt="service image"
                                    width={900}
                                    height={1000}
                                    className="w-full h-[420px] rounded-[20px]"
                                />
                            </div>

                            <div className="flex flex-col w-full lg:w-1/2 justify-between lg:h-[420px]">
                                <div>
                                    <h3 className="text-[32px] font-semibold">{activeData.children.serviceName}</h3>
                                    <p className="text-[#787878] text-lg mt-2.5 leading-[100%]">
                                        {activeData.children.serviceDescription}
                                    </p>
                                </div>
                                <div>
                                    <Link href={activeData.children.href} className="flex lg:text-[15px] font-bold text-white items-center justify-center lg:size-[140px] rounded-full bg-[#101010]">
                                        Подробнее
                                    </Link>
                                </div>



                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}
