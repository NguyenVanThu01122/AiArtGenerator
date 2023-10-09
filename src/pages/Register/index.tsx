import { Form, Input, message } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SidebarImageLogin } from "../../components/SidebarImageLogin";
import iconDiscord from "../../images/iconDiscord.svg";
import iconFacebook from "../../images/iconFacebook.svg";
import iconLogin from "../../images/iconLogin.png";
import icongg from "../../images/icongg.svg";
import { publicAxios } from "../../service/axios";
import {
  FormSignUp,
  ItemFormSignUp,
  ItemVerifyEmail,
  WrapperRegister,
} from "./styles";

export function Register() {
  const [focusInput, setFocusInput] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const handleChangeRegister = () => {
    setIsRegister(false);
  };

  // hàm xử lý form register
  const handleOnFinishRegister = (value: any) => {
    console.log("register");
    const bodyRegister = {
      firstName: value.firstName,
      lastName: value.lastName,
      email: value.email,
      password: value.password,
      redirectUrl: "http://localhost:3000/verify-register",
    };
    publicAxios
      .post("/auth/create", bodyRegister)
      .then((res) => {
        form.resetFields();
        setIsRegister(true);
      })
      .catch((error) => {
        message.error(error.response?.data?.message);
      });
  };

  const handleSubmit = () => {
    form.submit();
  };
  return (
    <WrapperRegister>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <SidebarImageLogin />

      {!isRegister ? (
        <ItemFormSignUp>
          <img className="icon-login" src={iconLogin} alt="" />
          <div>Sign up to your account</div>
          <div className="group-img">
            <img className="icon-google" src={icongg} alt="" />
            <img className="icon-discord" src={iconDiscord} alt="" />
            <img className="icon-facebook" src={iconFacebook} alt="" />
          </div>
          <div className="group-span">
            <span></span>
            <span>OR</span>
            <span></span>
          </div>

          <FormSignUp
            form={form}
            onFinish={handleOnFinishRegister}
            scrollToFirstError // tự động cuộn đến lỗi đầu tiên trong quá trình xử lý lỗi form
          >
            <div className="custom-input-name">
              <Form.Item
                className="first-name"
                name="firstName"
                rules={[
                  {
                    required: true,
                    message: "Please enter a valid !",
                  },
                ]}
              >
                <Input
                  className={`custom-input ${
                    focusInput === "firstName" && "border-violet"
                  }`}
                  onFocus={() => setFocusInput("firstName")}
                  onBlur={() => setFocusInput("")}
                  placeholder="First Name"
                />
              </Form.Item>
              <Form.Item
                className="last-name"
                name="lastName"
                rules={[
                  {
                    required: true,
                    message: "Please enter a valid last name !",
                  },
                ]}
              >
                <Input
                  className={`custom-input ${
                    focusInput === "lastName" && "border-violet"
                  }`}
                  onFocus={() => setFocusInput("lastName")}
                  onBlur={() => setFocusInput("")}
                  placeholder="Last Name"
                />
              </Form.Item>
            </div>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please enter a valid email address !",
                },
                () => ({
                  validator(_, value: string) {
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
                  focusInput === "email" && "border-violet"
                }`}
                onFocus={() => setFocusInput("email")}
                onBlur={() => setFocusInput("")}
                type="email"
                placeholder="Email Address"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please enter a valid email address !",
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
            <Form.Item
              name="confirm"
              rules={[
                {
                  required: true,
                  message: "Please enter a valid confirm password !",
                },
                ({ getFieldValue }) => ({
                  validator(_, value: number) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    } else {
                      return Promise.reject(
                        new Error("The password confirmation does not match !")
                      );
                    }
                  },
                }),
              ]}
            >
              <Input.Password
                className={`custom-input ${
                  focusInput === "confirmPassword" && "border-violet"
                }`}
                onFocus={() => setFocusInput("confirmPassword")}
                onBlur={() => setFocusInput("")}
                placeholder="Confirm Password"
              />
            </Form.Item>
          </FormSignUp>
          <div className="submit-register" onClick={handleSubmit}>
            Sign up
          </div>
          <div className="item-login">
            <div>Don't have an account?</div>
            <div
              className="signInAnimation"
              onClick={() => navigate("/sign-in")}
            >
              Sign in
            </div>
          </div>
          <div>VisionLab., Inc</div>
        </ItemFormSignUp>
      ) : (
        <ItemVerifyEmail>
          <div>Email Sent</div>
          <div>
            We've sent you an email with a link to verify your account. Click
            link in email to verify.
          </div>
          <div>
            Wrong email? <span onClick={handleChangeRegister}>Try Again</span>
          </div>
          <div>VisionLab., Inc</div>
        </ItemVerifyEmail>
      )}
    </WrapperRegister>
  );
}
