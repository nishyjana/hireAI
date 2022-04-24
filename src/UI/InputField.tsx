interface Props {
  onChange?: () => void;
  placeholder?: string;
  className?: string;
}

export default function InputField({
  onChange,
  placeholder,
  className,
}: Props) {
  return (
    <div>
      <input
        className={`outline-none ${className} `}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}
