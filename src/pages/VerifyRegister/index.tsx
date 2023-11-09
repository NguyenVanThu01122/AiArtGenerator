import { message } from "antd";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { privateAxios } from "../../service/axios";
import { Wrapper } from "./styles";

export default function VerifyRegister() {
  const navigate = useNavigate();
  const [isErrorVerify, setIsErrorVerify] = useState<any>();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    
    // hàm xác thực người dùng mới
    const handleVerifyToken = async () => {
      try {
        await privateAxios.get(`/auth/verify/${searchParams.get("token")}`);
        navigate("/sign-in");
        message.success(
          "You have successfully registered. Please log in to continue."
        );
      } catch (error) {
        setIsErrorVerify(true);
      }
    };
    if (searchParams.get("token")) {
      handleVerifyToken();
    }
  }, []);

  return (
    <Wrapper>
      {isErrorVerify && (
        <div>
          Your link has expired. Please{" "}
          <span onClick={() => navigate("/register")}>Register</span> again from
          the beginning to get the new link again.
        </div>
      )}
    </Wrapper>
  );
}
