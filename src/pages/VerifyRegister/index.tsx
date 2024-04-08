import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { verifytoken } from "../../services/auth";
import { SUCCESS_MESSAGE } from "../../utils/constants";
import { Content, Wrapper } from "./styles";

export default function VerifyRegister() {
  const navigate = useNavigate();
  const [isErrorVerify, setIsErrorVerify] = useState<boolean>();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    // hàm xác thực người dùng mới
    const handleVerifyToken = async () => {
      try {
        const token = searchParams.get("token");
        await verifytoken(token ?? "");
        navigate("/sign-in");
        toast.success(SUCCESS_MESSAGE.SUCCESS_REGISTER);
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
        <Content>
          Your link has expired. Please{" "}
          <span onClick={() => navigate("/register")}>Register</span> again from
          the beginning to get the new link again.
        </Content>
      )}
    </Wrapper>
  );
}
