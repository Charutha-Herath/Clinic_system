import { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
    className?: string;
}

export const Card = ({ children, className }: CardProps) => {
    return (
        <div className={`bg-white p-6 shadow-md rounded-lg ${className}`}>
            {children}
        </div>
    );
};

interface CardContentProps {
    children: ReactNode;
    className?: string;
}

export const CardContent = ({ children, className }: CardContentProps) => {
    return <div className={`p-4 ${className}`}>{children}</div>;
};

