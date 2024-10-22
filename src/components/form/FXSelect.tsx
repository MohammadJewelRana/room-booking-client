import { IInput } from "@/types";
import { Select, SelectItem } from "@nextui-org/select";
import { useFormContext } from "react-hook-form";

interface IProps extends IInput {
  options: {
    key: number;
    label: number;
  }[];
}

export default function FXSelect({
  options,
  name,
  label,
  variant = "bordered",
  disabled,
  
}: IProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Select
      {...register(name)}
      className="min-w-full sm:min-w-[225px] bg-white text-black"
      isDisabled={disabled}
      label={label}
      variant={variant}
    
    >
      {options.map((option) => (
        <SelectItem
          key={option.key}
          className="bg-white text-black hover:bg-gray-200" // Ensure each option has a white background and black text
        >
          {option.label}
        </SelectItem>
      ))}
    </Select>
  );
}
