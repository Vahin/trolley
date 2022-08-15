import studentProj from "../../img/StudentsProject.png";
function Program() {
    const cardStyles =
        "py-[24px] px-[20px] bg-white border-[#947EFF] border-[1px] rounded-[14px] shadow-[0px_5px_20px_rgba(0,0,0,0.06),0px_24px_160px_rgba(0,0,0,0.02)]";
    const paragraphStyles = "font-golos text-sm leading-[24px] text-[#0F1214] pb-4 last:pb-0";
    return (
        <section className="mx-auto max-w-[1440px] flex flex-col mb-[89px]">
            <div className="flex flex-col items-center max-w-[1185px] mx-auto px-[15px]">
                <h2 className="font-golos text-3xl md:text-mainheader font-bold text-[#0F1214] mb-[40px] text-center lg:pl-[57px] relative before:hidden lg:before:block before:absolute before:left-0 before:top-[50%] before:translate-y-[-50%] before:w-[26px] before:h-[26px] before:bg-[url('./img/question.svg')]">
                    Как именно ты станешь разработчиком
                </h2>
                <p className="font-golos text-lg md:text-2xl leading-[34px] tracking-[0.005em] text-center mb-[60px] max-w-[970px] mx-auto">
                    На курсе ты не просто изучаешь теоретический материал. в процессе изучения ты повторяете за действующим разработчиком, после чего
                    закрепляешь знания на заданиях и проектах.
                </p>
            </div>

            <div className="grid px-4  gap-y-5 lg:grid-cols-[1fr_600px_1fr] xl:grid-cols-[1fr_800px_1fr] mb-4">
                <div className={cardStyles + " lg:self-center mr-0 lg:mr-[-40px] relative"}>
                    <h3 className="text-[#9088FF] uppercase font-golos font-semibold text-sm leading-[18px] mb-[14px]">2 Командных проекта</h3>
                    <p className={paragraphStyles}>
                        Симуляция комерческого проекта - получаете ТЗ и организовываете командную разработку. Прокачивая навыки для будущей работы.
                    </p>
                    <p className={paragraphStyles}>
                        <ul>
                            <li className="font-medium">Проекты на тему:</li>
                            <li className="pl-2"> - JavaScript плагин "Контекстное меню"</li>
                            <li className="pl-2"> - Cайт на React, презентующий команду участников</li>
                        </ul>
                    </p>
                </div>
                <div className="hidden lg:block">
                    <img src={studentProj} alt="Работа студента" aria-hidden="true" />
                </div>
                <div className={cardStyles + " self-end ml-0 lg:ml-[-65px] relative"}>
                    <h3 className="text-[#9088FF] uppercase font-golos font-semibold text-sm leading-[18px] mb-[14px]">Индивидуальные проекты</h3>
                    <p className={paragraphStyles}>
                        <ol className="list-decimal list-inside">
                            <li>Проект корзина с товарами для интернет-магазина</li>
                            <li>Социальная сеть для поиска и знакомств</li>
                            <li>Дипломный проект на выбранную вами тему:</li>
                        </ol>
                        <ul>
                            <li className="pl-2"> - Учет доходов и рассходов</li>
                            <li className="pl-2"> - Бронирование отелей</li>
                            <li className="pl-2"> - Интернет-магазин или схожий по сложности проект, которым вы выберети и утвердите с куратором</li>
                        </ul>
                    </p>
                </div>
            </div>
            <button className="font-golos text-[13px] leading-[20px] text-[#0F1214] mx-auto">Проекты учеников</button>
        </section>
    );
}

export { Program };
