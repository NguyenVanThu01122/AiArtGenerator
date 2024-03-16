import { FormEvent, ReactNode } from "react";

interface FormGeneralProps {
  onSubmit?: () => void;
  children: ReactNode;
}
const FormGeneral = ({ onSubmit, children }: FormGeneralProps) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); //ngăn chặn hành vi mặc định, cho phép chúng ta tự xử lý logic của form một cách tùy ý mà không cần phải reload trang
    if (onSubmit) {
      onSubmit();
    }
  };

  return <form onSubmit={handleSubmit}>{children}</form>;
};

export default FormGeneral;
