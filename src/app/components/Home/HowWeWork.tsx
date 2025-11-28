"use client"
import { useState, useEffect, useRef } from 'react';

const steps = [
  {
    title: "Консультация",
    description: "Обсуждаем задачи, определяем цели и возможные направления решения"
  },
  {
    title: "Заключение договора",
    description: "Оформляем все документы и согласовываем условия сотрудничества"
  },
  {
    title: "Анализ и стратегия",
    description: "Проводим глубокий анализ и разрабатываем стратегию реализации"
  },
  {
    title: "Реализация проекта",
    description: "Воплощаем планы в жизнь с постоянным контролем качества"
  },
  {
    title: "Запуск и внедрение",
    description: "Тестируем, запускаем и обеспечиваем плавный переход"
  },
  {
    title: "Поддержка",
    description: "Обеспечиваем техническую поддержку и развитие проекта"
  }
];

export default function HowWeWork() {
  const [activeStep, setActiveStep] = useState(0);
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
        const newStep = Math.min(
          Math.floor(scrollProgress * steps.length),
          steps.length - 1
        );
        setActiveStep(Math.max(0, newStep));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolling]);

  const handleStepClick = (index) => {
    setActiveStep(index);
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
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start lg:items-stretch">
            <div className='flex flex-row lg:gap-[34px]'>
 <div className=" hidden lg:flex items-center h-full ">
            <div className="relative  w-full h-full flex  ">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[#e0e0e0] overflow-hidden">
                <div 
                  className="absolute top-0 left-0 w-full bg-[#101010] transition-all duration-300"
                  style={{ height: `${((activeStep + 1) / steps.length) * 100}%` }}
                ></div>
              </div>
              {steps.map((_, index) => (
                <div 
                  key={index}
                  className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
                  style={{ top: `${(index / (steps.length - 1)) * 100}%` }}
                >
                    {index === 0 && (
 <div className={`size-2.5 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                    index < activeStep 
                      ? 'bg-[#101010] text-white scale-100' 
                      : index === activeStep 
                        ? 'bg-[#101010] text-white scale-110' 
                        : 'bg-[#e0e0e0] text-[#505050] scale-100'
                  }`}>
                   
                  </div>
                    )}
                 
                </div>
              ))}
            </div>
          </div>
          {/* Left side - Steps */}
          <div className="flex-1 space-y-10">
            {steps.map((step, index) => (
              <button
                key={index}
                onClick={() => handleStepClick(index)}
                className={`text-left w-full transition-all duration-300 ${
                  activeStep === index 
                    ? 'opacity-100' 
                    : 'opacity-40 hover:opacity-60'
                }`}
              >
                <h4 className={` lg:w-[347px] transition-all duration-300 ${
                  activeStep === index 
                    ? 'text-[28px] font-semibold lg:text-[24px] text-[#101010]' 
                    : 'text-[20px] font-medium lg:text-[24px] text-[#505050]'
                }`}>
                  {step.title}
                </h4>
                {activeStep === index && (
                  <p className="mt-2 lg:w-[347px] leading-[100%] text-[#3F3F3F] text-[14px] lg:text-[18px] animate-fadeIn">
                    {step.description}
                  </p>
                )}
              </button>
            ))}
          </div>
            </div>
           

         <div>
            SALOM
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