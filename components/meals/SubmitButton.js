import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus({ type, message });
  return (
    <button type={type} disabled={pending}>
      {pending ? "saving..." : message}
    </button>
  );
};

export default SubmitButton;
