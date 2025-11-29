"use client"
import { useState , useEffect } from "react"
import Image from "next/image"




interface IFormData {
    fullName: string,
    service: string,
    phone: string,
    connect: string
}




export const HomeForm = () => {
    const [formData , setFormData] = useState<IFormData>({fullName: "" , service: "" , phone: "" , connect: ""})




    return (
        <section className="px-4 lg:px-36">
            <div className="flex flex-col lg:flex-row lg:justify-between bg-[#101010] lg:rounded-[60px] rounded-[30px]">
                <div className="flex flex-col gap-[10px] lg:gap-[15px] lg:pt-[50px] lg:pl-[50px]">
                    <p className="lg:text-[50px] text-[#FFFFFF] text-[28px] whitespace-pre-wrap font-semibold">
                        {`Нужна помощь с\n вашим проектом?`}
                    </p>
                    <p className="lg:text-[18px] text-[#787878] whitespace-pre-wrap text-[14px] font-medium">
                       {` Получите консультацию от экспертов\n и найдите решение для вашего проекта`}
                    </p>
                </div>

                <div>
                    <Image alt="form image" src={'/form/form.png'} width={1000} height={600} className="w-full h-full object-cover" />
                </div>

                <div className="flex flex-col gap-[12px] lg:pt-[50px] lg:pr-[120px] ">  
                    <input type="text" placeholder="FIO" className="rounded-[15px] px-[15px] border h-[50px] border-[#FFFFFF33] text-white"  />
                </div>
            </div>
        </section>
    )
}