import icon_1 from "../../img/item-1.svg";
import icon_2 from "../../img/item-2.svg";
import icon_3 from "../../img/item-3.svg";
import icon_4 from "../../img/item-4.svg";
import icon_5 from "../../img/item-5.svg";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useState, useRef, useLayoutEffect } from "react";

function Rails() {
    const imgPlaceholder = icon_2;
    const [data] = useState([
        {
            header: "SKILLS UPGRADE",
            skills: [
                {
                    img: icon_1,
                    alt: "Чистый код",
                    content: "Научишься понимать терминологию, документацию и писать код на уровне востребованных  разработчиков",
                },
                {
                    img: icon_2,
                    alt: "Технологии",
                    content: "Твои знания превратятся в систему, ты не просто изучишь технологии, но и поймешь как развиваться дальше ",
                },
                {
                    img: icon_3,
                    alt: "Приложение",
                    content: "Создашь Fullstack приложение, которое покажет что твои навыки выше чем у стандартного junior",
                },
            ],
        },
        {
            header: "STRONG HARD SKILLS",
            skills: [
                {
                    img: icon_4,
                    alt: "Реакт",
                    content: "Создашь с помощью фреймворка React  визуальную часть приложения: элементы, анимация",
                },
                {
                    img: icon_5,
                    alt: "NodeJS",
                    content: "Изучишь NodeJS на достаточном уровне чтобы связывать frontend и backend",
                },
                {
                    img: icon_2,
                    alt: "Это база",
                    content: "Овладеешь базой,  от которого можно отталкиваться и учить любую технологию на JavaScript",
                },
            ],
        },
        {
            header: "STRONG HARD SKILLS",
            skills: [
                {
                    img: icon_4,
                    alt: "Реакт",
                    content: "Создашь с помощью фреймворка React  визуальную часть приложения: элементы, анимация",
                },
                {
                    img: icon_5,
                    alt: "NodeJS",
                    content: "Изучишь NodeJS на достаточном уровне чтобы связывать frontend и backend",
                },
                {
                    img: icon_2,
                    alt: "Это база",
                    content: "Овладеешь базой,  от которого можно отталкиваться и учить любую технологию на JavaScript",
                },
            ],
        },
    ]);

    const trailLength = `+=${data.length * 2000}vh`;

    function useArrayRef() {
        const refs = useRef([]);
        refs.current = [];
        return [refs, (ref) => ref && refs.current.push(ref)];
    }

    const rails = useRef();
    const trolley = useRef();
    const mainHeader = useRef();
    const headerList = useRef();
    const [itemHeader, setItemHeader] = useArrayRef();
    const [itemContent, setItemContent] = useArrayRef();
    const [passengers, setPassengers] = useArrayRef();

    gsap.registerPlugin(ScrollTrigger);

    useLayoutEffect(() => {
        const scrollAnimation = (tl, arr) => {
            arr.forEach((_, index) => {
                if (index > 0) {
                    tl.to(itemHeader.current.slice(index - 1, index), {
                        // исчезает прошедший хедер
                        opacity: 0.5,
                    });

                    tl.to(headerList.current, {
                        // сдвигается каретка
                        x: -320 * index,
                        duration: 2,
                    });
                }

                tl.to(itemHeader.current.slice(index, index + 1), {
                    // появляется активный хедер
                    opacity: 1,
                });

                if (index === 0) {
                    tl.to(itemHeader.current.slice(index + 1), {
                        // На первом заходе появляются остальные хедеры
                        opacity: 0.5,
                    });
                }

                tl.to(itemContent.current.slice(index * 3, index * 3 + 3), {
                    // появляются айтемы
                    y: -50,
                    opacity: 1,
                    stagger: 1,
                    duration: 4,
                });

                tl.to(itemContent.current.slice(index * 3, index * 3 + 3), {
                    // исчезают айтемы
                    y: -100,
                    opacity: 0,
                    stagger: 1,
                    duration: 4,
                });

                tl.to(passengers.current, {
                    // телепортируется каретка айтемов
                    x: `-${100 * (index + 1)}%`,
                    duration: 0,
                });
            });
        };

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: rails.current,
                toggleActions: "restart none reverse none",
                start: "top top",
                end: trailLength,
                scrub: 1,
            },
        });

        tl.to(trolley.current, {
            scrollTrigger: {
                trigger: rails.current,
                toggleActions: "restart none reverse none",
                start: "top top",
                end: trailLength,
                scrub: true,
                pin: true,
            },
        });

        tl.to(mainHeader.current, {
            y: -50,
            opacity: 1,
        });

        scrollAnimation(tl, data);

        return () => {
            /* trolleyAnimation.kill(); */
            tl.kill();
        };
    });

    return (
        <div className="bg-[#0F1214] md:bg-inherit">
            <section className="px-0 md:px-[30px]  py-0 lg:py-[5vh]" ref={rails}>
                <div
                    className="pb-[10vh] md:pb-0 h-[110vh] lg:h-[90vh] md:rounded-[20px] pt-[calc(5vh + 50px)] bg-[#0F1214] text-white px-4 overflow-hidden flex flex-col justify-center"
                    ref={trolley}
                >
                    <h2
                        className="font-golos font-bold text-3xl md:text-[54px] md:leading-[70px] text-center mb-0 md:mb-10 xl:mb-[40px] opacity-0"
                        ref={mainHeader}
                    >
                        Что тебе даст прохождение курса?
                    </h2>

                    <ul className="space-x-[20px] flex mb-20 md:mb-24 lg:mb-28 xl:mb-[158px] ml-[50%] min-w-[100vw]" ref={headerList}>
                        {data.map((item, i) => {
                            return (
                                <li
                                    className="font-golos uppercase font-semibold translate-x-[-50%] text-2xl color-white opacity-0 basis-[300px] shrink-0 text-center"
                                    ref={setItemHeader}
                                    key={i}
                                >
                                    {item.header}
                                </li>
                            );
                        })}
                    </ul>

                    <div className="flex">
                        {data.map((item, i) => {
                            return (
                                <div
                                    className="flex flex-col md:flex-row justify-center space-y-4 sm:space-y-8 md:space-x-6 md:space-y-0  lg:space-x-[50px] items-center md:items-start px-6 lg:px-[5vw] basis-full shrink-0"
                                    ref={setPassengers}
                                    key={i}
                                >
                                    {item.skills.map((skill, j) => {
                                        return (
                                            <div
                                                className="flex flex-col justify-center md:justify-start items-center opacity-0 space-y-2  md:space-y-[30px] flex-1"
                                                ref={setItemContent}
                                                key={j}
                                            >
                                                <img
                                                    className="w-8 md:w-[52px] h-8 md:h-[52px]"
                                                    src={skill.img ?? imgPlaceholder}
                                                    alt={skill.alt}
                                                    aria-hidden="true"
                                                />
                                                <div className="font-golos font-medium text-base lg:text-[22px] lg:leading-[29px] text-center">
                                                    {skill.content}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}

export { Rails };
