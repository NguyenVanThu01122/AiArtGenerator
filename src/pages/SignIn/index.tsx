import { Button, Checkbox, Form, Input, message } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SidebarImageLogin } from "../../components/SidebarImageLogin";
import iconDiscord from "../../images/iconDiscord.svg";
import iconFacebook from "../../images/iconFacebook.svg";
import iconLogin from "../../images/iconLogin.png";
import icongg from "../../images/icongg.svg";
import { publicAxios } from "../../service/axios";
import {
  FormSignIn,
  FormSignUp,
  ItemFormSignUp,
  ItemSignIn,
  ModalForgotPassword,
  WrapperSignIn,
} from "./styles";
export function SignIn() {
  const [focusInput, setFocusInput] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [form] = Form.useForm();
  const navigate = useNavigate();

  // hàm xử lý thay đổi form
  const handleChangeForm = () => {
    setIsLogin(!isLogin);
  };

  // hàm xử lý form login
  const handleOnFinishLogin = (value: any) => {
    console.log("login");
    const bodyLogin = {
      email: value?.email,
      password: value?.password,
    };
    publicAxios
      .post("/auth/login", bodyLogin)
      .then((res) => {
        message.success(res.data?.message);
        navigate("/ai-art-generator");
      })
      .catch((error) => {
        message.error(error.response?.data?.message);
      });
  };

  // hàm xử lý form register
  const handleOnFinishRegister = (value: any) => {
    console.log("register");
    const bodyRegister = {
      firstName: value.firstName,
      lastName: value.lastName,
      email: value.email,
      password: value.password,
    };
    publicAxios
      .post("/auth/create", bodyRegister)
      .then((res) => {
        message.success(res.data?.message);
        console.log(res.data?.data);
        // setIsLogin(true);
      })
      .catch((error) => {
        message.error(error.response?.data?.message);
      });
  };

  // const handleForgotPassword=()=>{
  //   setForgotPassword(true)
  // }
  const [isModalPassword, setIsModalPassword] = useState(false);
  const showModalForgotPassword = () => {
    setIsModalPassword(true);
  };
  const CancelModalForgotPassword = () => {
    setIsModalPassword(false);
  };
  const handleSubmit = () => {
    form.submit();
  };
  const handleSubmitRegister = () => {
    form.submit();
  };

  return (
    <WrapperSignIn>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <SidebarImageLogin />

      {!isLogin ? (
        <ItemSignIn>
          <img className="icon-login" src={iconLogin} alt="" />
          <div>Sign in to your account</div>
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
                rules={[
                  {
                    validator: (_, value) =>
                      value
                        ? Promise.resolve()
                        : Promise.reject(new Error("Please confirm !")),
                  },
                ]}
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
              <div onClick={handleChangeForm}>Register</div>
            </div>
            <div>VisionLab., Inc</div>
          </FormSignIn>
        </ItemSignIn>
      ) : (
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
                      Promise.resolve();
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
            <div className="submit-register" onClick={handleSubmitRegister}>
              Sign up
            </div>
          </FormSignUp>
          <div className="item-login">
            <div>Don't have an account?</div>
            <div className="signInAnimation" onClick={handleChangeForm}>
              Sign in
            </div>
          </div>
          <div>VisionLab., Inc</div>
        </ItemFormSignUp>
      )}

      <ModalForgotPassword
        open={isModalPassword}
        footer={false}
        onCancel={CancelModalForgotPassword}
      >
        <div className="forgot-password">
          <div className="title">
            <img src={iconLogin} alt="" />
            <div>Forgot your password?</div>
          </div>
          <div className="select-item">
            <div>
              Enter your email and we'll send you a link to reset your password
            </div>
            <Input className="custom-input" />
            <Button className="custom-button">Request Password Reset</Button>
          </div>
          <div className="back" onClick={CancelModalForgotPassword}>
            <img
              src="https://dev.creatorhub.ai/static/media/ic_back_to_login.3ec73c33f21abdcfc8ca17859bc90f95.svg"
              alt=""
            />
            <div>Back to sign in</div>
          </div>
        </div>
      </ModalForgotPassword>
    </WrapperSignIn>
  );
}
