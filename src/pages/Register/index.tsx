import { Form, Input, message } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AnimationStar from "../../components/AnimationStar";
import { SidebarImageLogin } from "../../components/SidebarImageLogin";
import icBack from "../../images/ic-back.svg";
import iconDiscord from "../../images/iconDiscord.svg";
import iconFacebook from "../../images/iconFacebook.svg";
import iconLogin from "../../images/iconLogin.png";
import icongg from "../../images/icongg.svg";
import { privateAxios } from "../../service/axios";
import {
  FormSignUp,
  ItemFormSignUp,
  ItemVerifyEmail,
  ModalSentEmail,
  WrapperRegister,
} from "./styles";

export function Register() {
  const [isModalSentEmail, setIsModalSentEmail] = useState(false);

  const [form] = Form.useForm();
  const navigate = useNavigate();

  // hàm xử lý form register
  const handleOnFinishRegister = (value: any) => {
    const bodyRegister = {
      firstName: value.firstName,
      lastName: value.lastName,
      email: value.email,
      password: value.password,
      redirectUrl: "http://localhost:3000/verify-register",
    };
    privateAxios
      .post("/auth/create", bodyRegister)
      .then((res) => {
        form.resetFields();
        setIsModalSentEmail(true);
      })
      .catch((error) => {
        message.error(error.response?.data?.message);
      });
  };

  const handleCancelModal = () => {
    setIsModalSentEmail(false);
  };

  // hàm đăng ký bằng google
  const handleRegisterGoogle = () => {
    window.location.href = `${process.env.REACT_APP_BASE_URL}/google?redirect_url=${window.location.origin}`;
    // window.location.href = `http://localhost:9090/google?redirect_url=${window.location.origin}`;
  };
  // hàm đăng ký bằng facebook
  const handleRegisterFacebook = () => {
    window.location.href = `${process.env.REACT_APP_BASE_URL}/facebook?redirect_url=${window.location.origin}`;
  };

  const handleSubmit = () => {
    form.submit();
  };

  return (
    <WrapperRegister>
      <AnimationStar />
      <SidebarImageLogin />
      <ItemFormSignUp>
        <img className="icon-login" src={iconLogin} alt="" />
        <div>Sign up to your account</div>
        <div className="group-img">
          <img
            className="icon-google"
            onClick={handleRegisterGoogle}
            src={icongg}
            alt=""
          />
          <img className="icon-discord" src={iconDiscord} alt="" />
          <img
            className="icon-facebook"
            onClick={handleRegisterFacebook}
            src={iconFacebook}
            alt=""
          />
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
              <Input className="custom-input" placeholder="First Name" />
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
              <Input className="custom-input" placeholder="Last Name" />
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
              className="custom-input"
              type="email"
              placeholder="Email Address"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please enter password!",
              },
              {
                min: 8,
                message: "Password must be at least eight characters!",
              },
            ]}
          >
            <Input.Password
              className="custom-input custom-password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item
            name="confirm"
            rules={[
              {
                required: true,
                message: "Please enter a valid confirm password!",
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
              className="custom-input custom-password"
              placeholder="Confirm Password"
            />
          </Form.Item>
        </FormSignUp>
        <div className="submit-register" onClick={handleSubmit}>
          Sign up
        </div>
        <div className="item-login">
          <div>Don't have an account?</div>
          <div className="signInAnimation" onClick={() => navigate("/sign-in")}>
            Sign in
          </div>
        </div>
        <div>VisionLab., Inc</div>
      </ItemFormSignUp>

      {isModalSentEmail && (
        <ModalSentEmail
          open={isModalSentEmail}
          footer={false}
          onCancel={handleCancelModal}
        >
          <ItemVerifyEmail>
            <img className="ic-logo" src={iconLogin} alt="" />
            <div>Email Sent</div>
            <div>
              We've sent you an email with a link to verify your account. Click
              link in email to verify.
            </div>
            <div>
              Wrong email? <span onClick={handleCancelModal}>Try Again</span>
            </div>
            <div className="item-back" onClick={() => navigate("/sign-in")}>
              <img src={icBack} alt="" />
              <div>Back to sign in</div>
            </div>
            <div>VisionLab., Inc</div>
          </ItemVerifyEmail>
        </ModalSentEmail>
      )}
    </WrapperRegister>
  );
}
