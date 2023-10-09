import { Button, Form, Input } from "antd";
import { FormChangePassword, ItemImage, WrapperChangePassword } from "./styles";

function ChangePassword() {
  const [form] = Form.useForm();

  const handleFinish = (values: any) => {};

  const handleSubmit = () => {
    form.submit();
  };
  return (
    <WrapperChangePassword>
      <ItemImage>
        <img
          src="https://creatorhub.ai/static/media/login-background-mockup.3b0cd4f90070554f6218.png"
          alt=""
        />
        <div className="contents">
          <div>
            "The AI-powered tools are incredibly user-friendly and have saved us
            countless hours of work."
          </div>
          <div className="last-content">
            <div>Louis Tomlinson</div>
            <div>Youtober</div>
          </div>
        </div>
      </ItemImage>

      <FormChangePassword onFinish={handleFinish} form={form} layout="vertical">
        <div className="parent-form">
          <div className="title">
            <div>Set new password</div>
          </div>
          <div className="title-input">New password</div>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input new password!",
              },
              {
                min: 8,
                message: "Password at least eight characters!",
              },
            ]}
          >
            <Input placeholder="New password" className="input" />
          </Form.Item>
          <div className="title-input">Comfirm new password</div>
          <Form.Item
            name="repeat-password"
            rules={[
              {
                required: true,
                message: "Please input repeat new password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value: string) {
                  if (value === "") {
                    return Promise.resolve();
                  }
                  if (value.length < 8) {
                    return Promise.reject(
                      new Error("Password at least eight characters!")
                    );
                  } else if (getFieldValue("password") !== value) {
                    return Promise.reject(
                      new Error("The re-entered password does not match!")
                    );
                  } else {
                    return Promise.resolve();
                  }
                },
              }),
            ]}
          >
            <Input className="input" placeholder="Comfirm new password" />
          </Form.Item>
          <Button className="btn" onClick={handleSubmit}>
            Set new password
          </Button>
          <div className="item-back">
            <img
              src="https://creatorhub.ai/static/media/ic_back_to_login.3ec73c33f21abdcfc8ca17859bc90f95.svg"
              alt=""
            />
            <div>Back to signin</div>
          </div>
          <div className="visionlab">VisionLab., Inc</div>
        </div>
      </FormChangePassword>
    </WrapperChangePassword>
  );
}
export default ChangePassword;
