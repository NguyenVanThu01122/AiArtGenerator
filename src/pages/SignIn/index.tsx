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
  ItemSignIn,
  ModalForgotPassword,
  WrapperSignIn,
} from "./styles";
export function SignIn() {
  const [focusInput, setFocusInput] = useState("");
  const [forgotEmail, setForgotEmail] = useState<any>("");
  const [errorEmail, setErrorEmail] = useState("");
  const [focusEmail, seFocusEmail] = useState("");
  const [isModalPassword, setIsModalPassword] = useState(false);

  // const [forgotPassword, setForgotPassword] = useState(false);
  const [form] = Form.useForm();
  const navigate = useNavigate();

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
        navigate("/home");
      })
      .catch((error) => {
        message.error(error.response?.data?.message);
      });
  };

  const showModalForgotPassword = () => {
    setIsModalPassword(true);
  };
  const CancelModalForgotPassword = () => {
    setIsModalPassword(false);
    setForgotEmail("");
    setErrorEmail("");
  };
  const handleSubmit = () => {
    form.submit();
  };

  const handleChangeForgotEmail = (e: any) => {
    const valueEmail = e.target.value;
    setForgotEmail(valueEmail);
    if (!valueEmail) {
      setErrorEmail("Vui lòng nhập email !");
    } else if (valueEmail.indexOf("@") === -1) {
      setErrorEmail("Vui lòng nhập đúng định dạng Email !");
    } else {
      setErrorEmail("");
    }
  };

  return (
    <WrapperSignIn>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <SidebarImageLogin />

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
            <div onClick={() => navigate("/register")}>Register</div>
          </div>
          <div>VisionLab., Inc</div>
        </FormSignIn>
      </ItemSignIn>

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
            <input
              className="custom-input"
              value={forgotEmail}
              onChange={handleChangeForgotEmail}
              placeholder="Please enter email address"
            />
            <div className="error-email">{errorEmail}</div>
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
