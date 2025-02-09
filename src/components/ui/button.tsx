import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "danger";
}

export const Button = ({ variant = "primary", className, ...props }: ButtonProps) => {
    return (
        <button
            className={clsx(
                "px-4 py-2 rounded-lg text-white font-semibold transition",
                {
                    "bg-blue-600 hover:bg-blue-700": variant === "primary",
                    "bg-gray-500 hover:bg-gray-600": variant === "secondary",
                    "bg-red-600 hover:bg-red-700": variant === "danger",
                },
                className
            )}
            {...props}
        />
    );
};
