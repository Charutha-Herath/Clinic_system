import { InputHTMLAttributes } from "react";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Checkbox = (props: CheckboxProps) => {
    return (
        <input type="checkbox" className="w-5 h-5 accent-blue-600" {...props} />
    );
};
