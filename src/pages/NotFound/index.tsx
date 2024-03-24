import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import imgError from "../../images/404-error-page.webp";
import { Wrapper } from "./styles";
function NotFound() {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <div className="img-error">
        <img src={imgError} alt="" />
      </div>
      {/* <img src={imgError404} alt="" /> */}
      <Button className="btn" onClick={() => navigate("/")}>
        Back Home
      </Button>
    </Wrapper>
  );
}
export default NotFound;
