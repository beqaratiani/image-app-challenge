import { UseFormRegisterReturn } from 'react-hook-form';

interface SingleInputProps {
  title: string;
  placeholder: string;
  inputType?: string;
  register: UseFormRegisterReturn;
  error?: string;
}

export default function SingleInput({
  title,
  placeholder,
  inputType,
  register,
  error,
}: SingleInputProps) {
  return (
    <div>
      <div className="flex flex-col gap-[8px]">
        <p
          className={`text-[14px] ${error ? 'text-[#ff0000]' : 'text-primary'}`}
        >
          {title}
        </p>
        <input
          type={inputType}
          className={`w-full h-[40px] border-[1px] rounded-[8px] px-[13px] bg-background text-primary outline-none ${
            error ? 'border-red-500' : 'border-border'
          }`}
          placeholder={error ? error : placeholder}
          {...register}
        />
      </div>
      <span className="text-[#ff0000] text-[14px]">{error}</span>
    </div>
  );
}
