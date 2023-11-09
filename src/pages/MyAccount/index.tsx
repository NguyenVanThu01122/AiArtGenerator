import { Button } from "antd";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import icCredits from "../../images/MyAccount/icon-credit.svg";
import icEmail from "../../images/MyAccount/icon-email.svg";
import { Wrapper } from "./styles";

export function MyAccount() {
  const users = useSelector((state: any) => state.app.user);
  const navigate = useNavigate();

  return (
    <Wrapper>
      {/* <div className="box-user"> */}
      <div className="content-users">
        <img className="avatar" src={users?.avatar} alt="" />
        <div className="information-users">
          <div className="name">
            <div>{users?.lastName}</div>
            <div>{users?.firstName}</div>
          </div>
          <div className="address">
            <div className="content">
              <img src={icEmail} alt="" />
              <div>{users?.email}</div>
            </div>
            <div className="content">
              <img src={icCredits} alt="" />
              <div>{users?.credits}</div>
              <span>Credits</span>
            </div>
          </div>
        </div>
      </div>
      <div className="content-profile">
        <div>Profile Details</div>
        <div className="detail-profile">
          <div className="title">
            <div>Full Name</div>
            <div>Email</div>
          </div>
          <div className="group-text">
            <div className="name">
              <span>{users?.lastName}</span>
              <span>{users?.firstName}</span>
            </div>
            <div>{users?.email}</div>
          </div>
        </div>
      </div>
      <Button className="btn-signOut " onClick={() => navigate("/sign-in")}>
        Sign Out
      </Button>
      {/* </div> */}
    </Wrapper>
  );
}
