import clsx from "clsx";
import { PropsWithChildren } from "react";

interface ButtonProps {
    className?: string | string[];
    type: "submit" | "button";
    handleClick?: () => void;
}

function Button({
    className,
    type,
    handleClick,
    children,
    ...restProps
}: PropsWithChildren<ButtonProps>) {
    return (
        <button
            className={clsx(
                "focus mt-6 w-full rounded-sm bg-navy py-[1.0625rem] text-body font-bold text-white transition",
                "hover:cursor-pointer hover:bg-vermillion hover:text-white hover:shadow-secondary",
                className
            )}
            type={type}
            onClick={handleClick}
            {...restProps}
        >
            {children}
        </button>
    );
}
export default Button;
