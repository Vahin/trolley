function Indicators() {
    const itemStyles =
        "relative sm:pl-[30px] flex items-center space-x-4 max-w-[400px] before:hidden sm:before:block before:absolute before:top-[50%] before:left-0 before:translate-y-[-50%] before:bg-[#E0E6E9] before:rounded-full before:w-[10px] before:h-[10px]";
    const numberStyles = "font-golos font-semibold text-[72px] leading-[78px] text-primary2 tracking-[0.01em]";
    const descStyles = "font-golos text-base leading-[24px] tracking-[0.005em] text-[#0F1214]";
    return (
        <ul className="flex flex-col 2xl:flex-row 2xl:justify-between mx-auto max-w-[400px] space-y-5 2xl:space-y-0 2xl:w-auto 2xl:max-w-[1410px] 2xl:px-[90px] mb-[140px]">
            <li className={itemStyles}>
                <div className={numberStyles}>293</div>
                <div className={descStyles}>HD видеоурока длительностью 3 - 15 минут </div>
            </li>
            <li className={itemStyles}>
                <div className={numberStyles}>6</div>
                <div className={descStyles}>Мероприятий на курсе (Хакатоны, мастер классы, разборы и т.д.)</div>
            </li>
            <li className={itemStyles}>
                <div className={numberStyles}>193</div>
                <div className={descStyles}>заданий и тестов для закрепления </div>
            </li>
        </ul>
    );
}

export { Indicators };
