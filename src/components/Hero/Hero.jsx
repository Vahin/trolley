import javascriptAnimImage from "../../img/hero-table.svg";
import commandLine from "../../img/command-line.svg";
import dots from "../../img/dots.svg";

function Hero() {
    return (
        <section className="relative max-w-[1600px] mx-auto md:px-8 mb-[100px]">
            <div className="mt-[99px] pt-8 md:pt-[66px] px-[25px] lg:px-[90px] text-white tracking-[0.01em]  bg-[#7B72FE] md:rounded-l-[40px] relative z-10 after:w-screen after:h-full after:bg-[#7B72FE] after:absolute after:top-0 after:left-[99%] grid grid-cols-1 xl:grid-cols-[15fr,8fr] gap-x-[30px] lg:-space-y-32 ">
                <div className="mb-[66px] 2xl:pr-28 relative z-30 flex flex-col">
                    <h1 className="font-golos text-3xl md:text-mainheader font-bold mb-4 md:mb-[40px]">
                        Профессия <br /> Frontend — разработчик
                    </h1>
                    <h2 className="font-golos text-xl  md:text-[30px] font-semibold  md:leading-[42px] tracking-[0.005em] mb-4 md:mb-[26px]">
                        Стань с нуля продвинутым Junior разработчиком за 7 месяцев с знанием технологий больше, чем у других кандидатов
                    </h2>
                    <p className="font-golos text-base md:text-[18px] md:leading-[27px] tracking-[0.005em] mb-6 md:mb-[60px]">
                        Начиная с основ изучишь JavaScript, разберешься с самыми популярными технологиями, научишься писать Frontend на фреймворке и
                        связывать его с Backend. Навыки после курса оцениваются от 100 т.р.
                    </p>
                    <button className="font-golos self-center md:self-start text-[18px] leading-none bg-primary2 py-[28px] px-6 md:px-[40px] rounded-[51px] hover:text-black hover:bg-white transition-colors duration-300">
                        Задать вопрос об обучении
                    </button>
                </div>
                <div className="min-w-[360px] justify-self-center lg:justify-self-auto grid relative lg:ml-[50%] xl:ml-0">
                    <div className="relative self-end lg:w-[832px] z-30 flex items-end ">
                        <img src={javascriptAnimImage} alt="Приложение на javascript" aria-hidden="true" className="w-full relative z-30" />
                        <div className="w-[132px] h-[132px] absolute top-0 left-0 translate-x-[-50%] translate-y-[-20%] z-10 opacity-20">
                            <img src={dots} alt="тчк" aria-hidden="true" />
                        </div>
                    </div>
                    <div className="hidden lg:block font-golos text-base tracking-[0.005em] text-black bg-white pt-[40px] px-[24px] pb-[30px] rounded-[24px] shadow-[0px_5px_50px_rgba(0,0,0,0.07),0px_24px_160px_rgba(0,0,0,0.05)] max-w-[396px] absolute left-[-100px] top-full translate-y-[-55%] z-40 ">
                        <div>
                            <span className="text-primary2">Обучение</span> для тех,{" "}
                            <span className="text-[#979EA2]">кто готов учиться 10 часов в неделю</span>,
                            <span className="text-primary2">чтобы получить результат</span>. Мы даем
                            <span className="text-[#979EA2]">необходимые навыки</span> на продвинутом уровне,{" "}
                            <span className="text-[#979EA2]">убирая все лишнее</span>
                        </div>
                        <div className="absolute left-[62px] top-0 translate-y-[-70%] w-[76px] h-[76px] rounded-[24px] bg-[#7F76FF] flex justify-center items-center">
                            <img src={commandLine} alt="Иконка командной строки" aria-hidden="true" />
                        </div>
                    </div>
                </div>
                <div className="absolute h-[320px] overflow-hidden bottom-0 left-[10%] z-[5] flex space-x-2">
                    <div className="min-w-[360px] min-h-[360px] rounded-full bg-black/5"></div>
                    <div className="min-w-[360px] min-h-[360px] rounded-full bg-black/5"></div>
                    <div className="min-w-[360px] min-h-[360px] rounded-full bg-black/5"></div>
                </div>
            </div>
            <div className="hidden md:block w-[132px] h-[132px] absolute left-0 bottom-0 translate-x-[-20%] translate-y-[30%] z-[5] ">
                <img src={dots} alt="тчк" aria-hidden="true" />
            </div>
        </section>
    );
}

export { Hero };
