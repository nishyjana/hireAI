interface Props {
    onChange?: (e) => void;
    placeholder?: string;
    className?: string;
    disabled?: boolean;
}

export default function InputField({ onChange, placeholder, className, disabled }: Props) {
    return (
        <div>
            <input
                className={`outline-none ${className} `}
                placeholder={placeholder}
                onChange={(e) => onChange(e)}
                disabled={disabled}
            />
        </div>
    );
}
