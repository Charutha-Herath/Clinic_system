import { SelectHTMLAttributes, ReactNode } from "react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {}

export const Select = (props: SelectProps) => {
    return (
        <select
            className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300 outline-none"
            {...props}
        />
    );
};

interface SelectItemProps {
    value: string;
    children: ReactNode;
}

export const SelectItem = ({ value, children }: SelectItemProps) => {
    return <option value={value}>{children}</option>;
};

