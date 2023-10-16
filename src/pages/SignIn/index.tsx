import { Button, Checkbox, Form, Input, message } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import AnimationStar from "../../components/AnimationStar";
import { SidebarImageLogin } from "../../components/SidebarImageLogin";
import iconBack from "../../images/ic-back.svg";
import iconDiscord from "../../images/iconDiscord.svg";
import iconFacebook from "../../images/iconFacebook.svg";
import iconLogin from "../../images/iconLogin.png";
import icongg from "../../images/icongg.svg";
import { saveLogin, saveToken } from "../../redux/Actions/app";
import { privateAxios } from "../../service/axios";
import {
  FormSignIn,
  ItemSignIn,
  ItemVerifyEmail,
  ModalForgotPassword,
  WrapperSignIn,
} from "./styles";

export function SignIn() {
  const [focusInput, setFocusInput] = useState("");
  const [forgotEmail, setForgotEmail] = useState<any>("");
  const [errorEmail, setErrorEmail] = useState<any>("");
  const [isforgotPassword, setIsForgotPassword] = useState(false);
  const [isModalPassword, setIsModalPassword] = useState(false);
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // hàm xử lý form login
  const handleOnFinishLogin = (value: any) => {
    const bodyLogin = {
      email: value?.email,
      password: value?.password,
    };
    privateAxios
      .post("/auth/login", bodyLogin)
      .then((res) => {
        dispatch(saveLogin(true));
        dispatch(saveToken(res.data?.token));
        localStorage.setItem("token", res.data?.token);
        localStorage.setItem("refreshToken", res.data?.refreshToken);
        navigate("/");
      })
      .catch((error) => {
        message.error(error.response?.data?.message);
      });
  };

  // mở modal quên password
  const showModalForgotPassword = () => {
    setIsModalPassword(true);
    setIsForgotPassword(true);
  };

  // hủy bỏ modal quên password
  const CancelModalForgotPassword = () => {
    setIsModalPassword(false);
    setForgotEmail("");
    setErrorEmail("");
  };

  const handleSubmit = () => {
    form.submit();
  };

  // hàm check lỗi modal form
  const handleChangeForgotEmail = (e: any) => {
    const valueEmail = e.target.value;
    setForgotEmail(valueEmail);
    if (!valueEmail) {
      setErrorEmail("Please enter email address!");
    } else if (valueEmail.indexOf("@") === -1) {
      setErrorEmail("Please enter the correct Email format!");
    } else {
      setErrorEmail("");
    }
  };

  const handleResetPassword = () => {
    if (!forgotEmail) {
      setErrorEmail("Please enter email address!");
    }
    if (!errorEmail) {
      const body = {
        email: forgotEmail,
        redirectUrl: "http://localhost:3000/change-password",
      };
      privateAxios
        .post("/auth/forget-password", body)
        .then((res) => {
          setIsForgotPassword(false);
        })
        .catch((error) => {
          message.error(error.response.data?.message);
          setErrorEmail(error.response.data?.message);
        });
    }
  };

  const handleTryAgain = () => {
    setForgotEmail("");
    setIsForgotPassword(true);
  };

  // hàm đăng nhập google
  const handleLoginGoogle = () => {
    window.location.href = `http://localhost:9090/google?redirect_url=${window.location.origin}`;
  };

  // hàm đăng nhập facebook
  const handleLoginFacebook = () => {
    window.location.href = `https://creatorhub-ai-api.vercel.app/facebook?redirect_url=${window.location.origin}`;
  };

  return (
    <WrapperSignIn>
      <AnimationStar />
      {isModalPassword && <div className="empty-div"></div>}
      <SidebarImageLogin />
      <ItemSignIn>
        <img className="icon-login" src={iconLogin} alt="" />
        <div>Sign in to your account</div>
        <div className="group-img">
          <img
            className="icon-google"
            onClick={handleLoginGoogle}
            src={icongg}
            alt=""
          />
          <img className="icon-discord" src={iconDiscord} alt="" />
          <img
            className="icon-facebook"
            onClick={handleLoginFacebook}
            src={iconFacebook}
            alt=""
          />
        </div>
        <div className="group-span">
          <span></span>
          <span>OR</span>
          <span></span>
        </div>

        <FormSignIn
          form={form}
          onFinish={handleOnFinishLogin}
          scrollToFirstError // tự động cuộn đến lỗi đầu tiên trong quá trình xử lý lỗi
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please enter email address !",
              },
              () => ({
                validator(_, value: String) {
                  if (value.includes("@") === false && value !== "") {
                    return Promise.reject(
                      new Error("Please enter a valid email address !")
                    );
                  } else {
                    return Promise.resolve();
                  }
                },
              }),
            ]}
          >
            <Input
              className={`custom-input ${
                focusInput === "name" && "border-violet"
              }`}
              onFocus={() => setFocusInput("name")}
              onBlur={() => setFocusInput("")}
              placeholder="Email Address"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please enter a valid password !",
              },
            ]}
          >
            <Input.Password
              className={`custom-input ${
                focusInput === "password" && "border-violet"
              }`}
              onFocus={() => setFocusInput("password")}
              onBlur={() => setFocusInput("")}
              placeholder="Password"
            />
          </Form.Item>
          <div className="select-item">
            <Form.Item
              name="checkbox"
              valuePropName="checked" // giá trị của thuộc tính checkbox
            >
              <Checkbox className="checkbox">Remember me !</Checkbox>
            </Form.Item>
            <div onClick={showModalForgotPassword}>Forgot Password?</div>
          </div>
          <div className="submit-signin" onClick={handleSubmit}>
            Sign in
          </div>
          <div className="item-register">
            <div>Don't have an account?</div>
            <div onClick={() => navigate("/register")}>Register</div>
          </div>
          <div>VisionLab., Inc</div>
        </FormSignIn>
      </ItemSignIn>

      <ModalForgotPassword
        centered
        open={isModalPassword}
        footer={false}
        onCancel={CancelModalForgotPassword}
      >
        {isforgotPassword ? (
          <div className="forgot-password">
            <div className="title">
              <img src={iconLogin} alt="" />
              <div>Forgot your password?</div>
            </div>
            <div className="select-item">
              <div>
                Enter your email and we'll send you a link to reset your
                password
              </div>
              <input
                type="email"
                className={`custom-input ${errorEmail && "border-red"}`}
                value={forgotEmail}
                onChange={handleChangeForgotEmail}
                placeholder="Please enter email address"
              />
              <div className="error-email">{errorEmail}</div>
              <Button
                className="custom-button"
                onClick={handleResetPassword}
                disabled={errorEmail || !forgotEmail}
              >
                Request Password Reset
              </Button>
            </div>
            <div className="back" onClick={CancelModalForgotPassword}>
              <img src={iconBack} alt="" />
              <div>Back to sign in</div>
            </div>
          </div>
        ) : (
          <ItemVerifyEmail>
            <img className="ic-logo" src={iconLogin} alt="" />
            <div>Email Sent</div>
            <div>
              We've sent you an email with a link to verify your account. Click
              link in email to verify.
            </div>
            <div>
              Wrong email? <span onClick={handleTryAgain}>Try Again</span>
            </div>
            <div className="item-back" onClick={CancelModalForgotPassword}>
              <img src={iconBack} alt="" />
              <div>Back to sign in</div>
            </div>
            <div>VisionLab., Inc</div>
          </ItemVerifyEmail>
        )}
      </ModalForgotPassword>
    </WrapperSignIn>
  );
}
