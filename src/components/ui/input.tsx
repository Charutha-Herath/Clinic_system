import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = (props: InputProps) => {
    return (
        <input
            className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300 outline-none"
            {...props}
        />
    );
};
