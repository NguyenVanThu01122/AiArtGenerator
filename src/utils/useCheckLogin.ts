import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// lúc nào nên viết customhook: khi mình muốn làm 1 tính năng để dùng chung, nhưng bên trong tính nắng đó lại sử dụng các hook khác
// hook tự custom phải có tên bắt đầu bằng chữ use
// custom hook bắt buộc hoặc không bắt buộc phải return ra kết quả hay tính năng mà mà mình muốn làm.

export const useCheckLogin = () => {
  const login = useSelector((state: any) => state.app.login);
  const isLoginNotification = useSelector(
    (state: any) => state.app.LoginNotification
  );
  const navigate = useNavigate();

  const navigateLogin = () => {
    if (!login) {
      navigate("/sign-in");
    }
  };
  return [login, navigateLogin, isLoginNotification];
};
