import { LabelHTMLAttributes } from "react";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}

export const Label = ({ children, ...props }: LabelProps) => {
    return (
        <label className="block text-sm font-medium text-gray-700" {...props}>
            {children}
        </label>
    );
};
