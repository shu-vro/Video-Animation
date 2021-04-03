const on = document.querySelector(".on"),
    off = document.querySelector(".off"),
    background = document.querySelector(".ink"),
    bg = document.querySelector(".bg");

    
animation(on, off, bg, background, 144, 6000, true);
function animation(
    trigger, // on
    back_trigger, // off
    bg_trigger, // bg
    ink, // ink
    frame, // fps
    time, // time
    vertical // Vertical or horizontal?
) {
    if (vertical) {
        ink.style.top = '100%';
        ink.style.left = '50%';
        trigger.addEventListener("click", () => {
            bg_trigger.classList.add("reveal");
            bg_trigger.classList.remove("hide");
            ink.style.height = `${frame}00%`;
            ink.style.width = `100%`;
            ink.animate(
                [
                    {
                        transform: `translateX(-50%) translateY(${-0}px)`,
                    },
                    {
                        transform: `translateX(-50%) translateY(${
                            -window.innerHeight * frame
                        }px)`,
                    },
                ],
                {
                    duration: time,
                    iterations: 1,
                    easing: `steps(${frame}, end)`,
                    fill: "forwards",
                }
            );
        });

        back_trigger.addEventListener("click", () => {
            bg_trigger.classList.remove("reveal");
            bg_trigger.classList.add("hide");

            ink.animate(
                [
                    {
                        transform: `translateX(-50%) translateY(${
                            -window.innerHeight * frame
                        }px)`,
                    },
                    {
                        transform: `translateX(-50%) translateY(${-0}px)`,
                    },
                ],
                {
                    duration: time,
                    iterations: 1,
                    easing: `steps(${frame}, end)`,
                    fill: "forwards",
                }
            );
        });
    } else {
        ink.style.top = "50%";
        ink.style.left = "100%";
        trigger.addEventListener("click", () => {
            bg_trigger.classList.add("reveal");
            bg_trigger.classList.remove("hide");
            ink.style.width = `${frame}00%`;
            ink.style.height = `100%`;
            ink.animate(
                [
                    {
                        transform: `translateY(-50%) translateX(${-0}px)`,
                    },
                    {
                        transform: `translateY(-50%) translateX(${
                            -window.innerWidth * frame
                        }px)`,
                    },
                ],
                {
                    duration: time,
                    iterations: 1,
                    easing: `steps(${frame}, start)`,
                    fill: "forwards",
                }
            );
        });

        back_trigger.addEventListener("click", () => {
            bg_trigger.classList.remove("reveal");
            bg_trigger.classList.add("hide");

            ink.animate(
                [
                    {
                        transform: `translateY(-50%) translateX(${
                            -window.innerWidth * frame
                        }px)`,
                    },
                    {
                        transform: `translateY(-50%) translateX(${-0}px)`,
                    },
                ],
                {
                    duration: time,
                    iterations: 1,
                    easing: `steps(${frame}, start)`,
                    fill: "forwards",
                }
            );
        });
    }
}
