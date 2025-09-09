import { ReactElement } from "react";
import Mq from "react-fast-marquee";

type Props = {
    children: Array<ReactElement>;
    speed?: number | undefined;
    direction?: "right" | "left" | "up" | "down" | undefined;
    pauseOnClick?: boolean | undefined;
    pauseOnHover?: boolean | undefined;
    play?: boolean | undefined;
    delay?: number | undefined;
};

const Marquee = ({
    children,
    speed,
    direction,
    delay,
    pauseOnClick,
    pauseOnHover,
    play,
}: Props) => {
    return (
        <Mq
            speed={speed}
            direction={direction}
            pauseOnClick={pauseOnClick}
            pauseOnHover={pauseOnHover}
            play={play}
            delay={delay}
        >
            {children}
        </Mq>
    );
};

export default Marquee;
