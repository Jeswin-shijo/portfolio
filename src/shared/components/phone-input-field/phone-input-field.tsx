import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

type PhoneInputFieldProps = {
  value: string;
  onChange: (value: string) => void;
  name?: string;
  required?: boolean;
  country?: string;
};

const CONTAINER_STYLE = { borderRadius: "8px" } as const;
const INPUT_STYLE = {
  height: "50px",
  borderRadius: "8px",
  width: "100%",
} as const;

const PhoneInputField = ({
  value,
  onChange,
  name,
  required = false,
  country = "in",
}: PhoneInputFieldProps) => (
  <PhoneInput
    country={country}
    value={value}
    onChange={onChange}
    inputProps={name ? { name, required } : undefined}
    containerStyle={CONTAINER_STYLE}
    inputStyle={INPUT_STYLE}
  />
);

export default PhoneInputField;
