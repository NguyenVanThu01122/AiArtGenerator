import { Checkbox, Form, Input } from "antd";
import { useState } from "react";
import { SidebarImageLogin } from "../../components/SidebarImageLogin";
import iconDiscord from "../../images/iconDiscord.svg";
import iconFacebook from "../../images/iconFacebook.svg";
import iconLogin from "../../images/iconLogin.png";
import icongg from "../../images/icongg.svg";
import { FormSignIn, ItemSignIn, WrapperSignIn } from "./styles";
export function SignIn() {
  const [focusInput, setFocusInput] = useState("");
  return (
    <WrapperSignIn>
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

        <FormSignIn>
          <Form.Item>
            <Input
              className={`custom-input ${
                focusInput === "name" && "border-violet"
              }`}
              onFocus={() => setFocusInput("name")}
              onBlur={() => setFocusInput("")}
              placeholder="Email Address"
            />
          </Form.Item>
          <Form.Item>
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
            <Form.Item>
              <Checkbox className="checkbox">Remember me !</Checkbox>
            </Form.Item>
            <div>Forgot Password?</div>
          </div>
          <div className="submit-signin">Sign in</div>
          <div className="item-register">
            <div>Don't have an account?</div>
            <div>Register</div>
          </div>
          <div>VisionLab., Inc</div>
        </FormSignIn>

        {/* <FormSignIn>
          <div className="custom-input-name">
            <Form.Item className="first-name">
              <Input className="custom-input" placeholder="First Name" />
            </Form.Item>
            <Form.Item className="last-name">
              <Input className="custom-input" placeholder="Last Name" />
            </Form.Item>
          </div>
          <Form.Item>
            <Input
              className="custom-input"
              type="email"
              placeholder="Email Address"
            />
          </Form.Item>
          <Form.Item>
            <Input.Password className="custom-input" placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Input.Password
              className="custom-input"
              placeholder="Comfirm Password"
            />
          </Form.Item>
          <Form.Item>
            <Input
              className="custom-input"
              placeholder="Referral code (if available)"
            />
          </Form.Item>
        </FormSignIn> */}
      </ItemSignIn>
      {/* <Form></Form> */}
    </WrapperSignIn>
  );
}
