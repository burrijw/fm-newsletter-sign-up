import { HTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

interface CardProps {
    children: ReactNode;
    className?: string;
    restProps?: HTMLAttributes<HTMLDivElement>;
}
function Card({ children, className, ...restProps }: CardProps) {
    return (
        <div
            className={clsx("rounded-lg bg-white p-6", className)}
            {...restProps}
        >
            {children}
        </div>
    );
}
export default Card;
