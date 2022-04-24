interface Props {
  onChange?: () => void;
  placeholder?: string;
  className?: string;
  disabled?:boolean;
}

export default function InputField({
  onChange,
  placeholder,
  className,
  disabled
}: Props) {
  return (
    <div>
      <input
        className={`outline-none ${className} `}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
}
