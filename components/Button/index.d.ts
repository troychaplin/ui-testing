interface ButtonProps {
    isOutline?: boolean;
    color?: string;
    size?: 'sm' | 'md' | 'lg';
    label: string;
    onClick?: () => void;
}
export declare const Button: ({ isOutline, size, color, label, ...props }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
export {};
