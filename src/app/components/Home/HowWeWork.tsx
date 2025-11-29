"use client"
import { useState, useEffect, useRef } from 'react';

const steps = [
  {
    title: "Консультация",
    description: "Обсуждаем задачи, определяем цели и возможные направления решения",
    imageActive: "/ac1.png",
    notActiveImage: "/ac1.png",
    id:1
  },
  {
    title: "Заключение договора",
    description: "Оформляем все документы и согласовываем условия сотрудничества",
    imageActive: "/zak_dogovor.png",
    notActiveImage: "/1.png",
    id:2
  },
  {
    title: "Анализ и стратегия",
    description: "Проводим глубокий анализ и разрабатываем стратегию реализации",
    imageActive: "/analiz.png",
    notActiveImage: "/2.png",
    id:3
  },
  {
    title: "Реализация проекта",
    description: "Воплощаем планы в жизнь с постоянным контролем качества",
    imageActive: "/realizatsiya.png",
    notActiveImage: "/3.png",
    id:4
  },
  {
    title: "Запуск и внедрение",
    description: "Тестируем, запускаем и обеспечиваем плавный переход",
    imageActive: "/zapusk.png",
    notActiveImage: "/4.png",
    id:5
  },
  {
    title: "Поддержка",
    description: "Обеспечиваем техническую поддержку и развитие проекта",
    imageActive: "/poderjka.png",
    notActiveImage: "/5.png",
    id:6
  }
];

export default function HowWeWork() {
  const [activeStep, setActiveStep] = useState(1);
  const sectionRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || isScrolling) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const sectionHeight = rect.height;
      const scrollProgress = -rect.top / (sectionHeight - window.innerHeight);

      if (scrollProgress >= 0 && scrollProgress <= 1) {
        const newStepIndex = Math.min(
          Math.floor(scrollProgress * steps.length),
          steps.length - 1
        );
        const newStepId = steps[Math.max(0, newStepIndex)].id;
        setActiveStep(newStepId);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolling]);

  const handleStepClick = (id) => {
    setActiveStep(id);
    setIsScrolling(true);
    setTimeout(() => setIsScrolling(false), 300);
  };

  return (
    <section
      ref={sectionRef}
      className="px-4 lg:px-36 lg:pt-[70px] pt-5 min-h-[200vh]"
    >
      <h3 className="text-[#101010] lg:text-[55px] text-[34px] font-semibold">
        Как мы работаем
      </h3>

      <div className="mt-10 lg:mt-[60px] sticky top-20">
        <div className="flex flex-row gap-2.5 lg:gap-16 items-start lg:items-stretch ">
          <div className='flex flex-row lg:gap-[34px]'>
            <div className=" flex items-center h-full ">
              <div className="relative  mr-3.5 lg:mr-0 w-full h-[790px] lg:h-full flex  ">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[#e0e0e0] overflow-hidden">
                  <div
                    className="absolute top-0 left-0 w-full bg-[#101010] transition-all duration-300"
                    style={{ height: `${(activeStep / steps.length) * 100}%` }}
                  ></div>
                </div>
                {steps.map((step, index) => (
                  <div
                    key={step.id}
                    className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
                    style={{ top: `${(index / (steps.length - 1)) * 100}%` }}
                  >
                    <div className={`size-2.5 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                      step.id < activeStep
                        ? 'bg-[#101010] text-white scale-100'
                        : step.id === activeStep
                          ? 'bg-[#101010] text-white scale-110'
                          : ''
                    }`}>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Left side - Steps */}
            <div className="flex flex-col gap-10 lg:gap-[50px] w-full lg:w-[427px]">
              {steps.map((step) => (
                <button
                  key={step.id}
                  onClick={() => handleStepClick(step.id)}
                  className={`text-left w-full flex flex-row gap-2.5 transition-all duration-300`}
                >
                  <div className='w-[191px]'>
                   <h4 
  className="lg:w-[347px] leading-[100%] transition-all duration-300 text-[20px] font-medium lg:text-[24px]"
  style={{
    color: step.id <= activeStep ? '#101010' : '#787878'
  }}
>
  {step.title}
</h4>
                    <div className='lg:block hidden'>
                      {activeStep === step.id && (
                        <p className="mt-2 lg:w-[347px] leading-[100%] text-[#3F3F3F] text-[14px] lg:text-[18px] animate-fadeIn">
                          {step.description}
                        </p>
                      )}
                    </div>

                    <p className='text-[14px] leading-[100%] mt-[10px] lg:hidden'>
                      {step.description}
                    </p>
                  </div>

                 <img
  src={step.id <= activeStep ? step.imageActive : step.notActiveImage}
  alt={step.title}
  className="w-[110px] h-[100px] lg:hidden object-cover transition-all duration-500"
/>
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1  justify-end items-end hidden lg:flex">
            <img
              src={steps.find(s => s.id === activeStep)?.imageActive || steps[0].imageActive}
              alt={steps.find(s => s.id === activeStep)?.title || steps[0].title}
              className="w-[250px] lg:w-[650px] lg:h-[428px] h-auto object-contain transition-all duration-500"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
}