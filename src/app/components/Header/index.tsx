"use client"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { ChevronDown, GlobeIcon, Menu } from "lucide-react"

const NAVIGATION = [
    {
        id: 1,
        name: { ru: "Главная", uz: "Bosh Sahifa", en: "Home" },
        path: '/'
    },
    {
        id: 2,
        name: { ru: "Услуги", uz: "Xizmatlar", en: "Services" },
        path: '/services',
        children: [
            {
                id: 21,
                name: { ru: "Запуск рекламы", uz: "Reklama yoqish", en: "Ads Launch" },
                path: '/service/ads-launch'
            },
            {
                id: 22,
                name: { ru: "Таргет реклама", uz: "Target reklama", en: "Target Ads" },
                path: '/service/target-reklama'
            },
            {
                id: 23,
                name: { ru: "Веб разработка", uz: "Web dasturlash", en: "Web Development" },
                path: '/service/web-razrabotka'
            },
        ]
    },
    {
        id: 3,
        name: { ru: "Блог", uz: "Bloglar", en: "Blog" },
        path: '/blog'
    },
    {
        id: 4,
        name: { ru: "Кейсы", uz: "Keyslar", en: "Case" },
        path: '/case'
    }
]

export const Header = () => {
    const pathname = usePathname()
    const [activeNav, setActiveNav] = useState(null)
    const [hoverId, setHoverId] = useState(null)

    useEffect(() => {
        const foundParent = NAVIGATION.find(nav => nav.path === pathname)
        if (foundParent) {
            setActiveNav(foundParent.id)
            return
        }

        const foundChildParent = NAVIGATION.find(nav =>
            nav.children?.some(child => child.path === pathname)
        )

        if (foundChildParent) {
            setActiveNav(foundChildParent.id)
        }
    }, [pathname])



    return (
        <header className="lg:px-[140px] h-[73px] px-4 flex flex-row lg:max-h-20 items-center justify-between bg-[#FBFBFB] py-4">
            <Link href={'/'} className="w-[100px] h-[65px] lg:h-16">
                <Image
                    src="https://ucarecdn.com/d6686775-ecf2-4fb1-9859-be2def3d7809/-/preview/400x256/"
                    alt="logo"
                    width={120}
                    height={60}
                    className="w-full h-full object-cover"
                />
            </Link>

            <nav className=" hidden lg:flex items-center gap-[35px] relative">
                {NAVIGATION.map(nav => {
                    const hasChildren = Array.isArray(nav.children) && nav.children.length > 0

                    return (
                        <div
                            key={nav.id}
                            className="relative"
                            onMouseEnter={() => hasChildren && setHoverId(nav.id)}
                            onMouseLeave={() => hasChildren && setHoverId(null)}
                        >
                            <Link
                                href={nav.path}
                                className={`flex items-center gap-1 lg:text-[16px] lg:py-2.5 lg:rounded-[100px] hover:bg-[#EEF0F2] transition-colors lg:px-[15px] font-medium ${activeNav === nav.id ? "text-[#101010] bg-[#EEF0F2]" : "text-[#3F3F3F]"
                                    }`}
                            >
                                {nav.name.ru}

                                {hasChildren && (
                                    <ChevronDown
                                        size={16}
                                        className={` mt-1 transition-transform ${hoverId === nav.id ? "rotate-180" : ""
                                            }`}
                                    />
                                )}
                            </Link>

                            {hasChildren && hoverId === nav.id && (
                                <div className="absolute z-50  shadow-lg rounded-xl  w-48">
                                    <div className="bg-white mt-4 ">
                                        {nav.children.map(child => (
                                            <Link
                                                key={child.path}
                                                href={child.path}
                                                className="block px-4 py-2 text-[15px] hover:bg-gray-100 text-[#3F3F3F]"
                                            >
                                                {child.name.ru}
                                            </Link>
                                        ))}
                                    </div>

                                </div>
                            )}
                        </div>
                    )
                })}
            </nav>

            <div className="flex flex-row items-center gap-2.5 ">
                <button className=" size-8 lg:size-[42px]">
                    <GlobeIcon className="w-full" />
                </button>
                <button className="bg-[#101010] hidden lg:flex cursor-pointer hover:opacity-90 text-[#FFFFFF] rounded-[10px]  py-3 px-5 lg:text-[15px] font-bold ">
                    Оставить заявку
                </button>
                <button className="lg:size-[42px] size-8 lg:hidden">
                    <Menu className="w-full" />
                </button>
            </div>
        </header>
    )
}
