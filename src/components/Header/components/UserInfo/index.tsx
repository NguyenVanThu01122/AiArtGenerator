import { useSelector } from "react-redux";
import icCredits1 from "../../../../images/ic_credits1.svg";
import { RootState } from "../../../../reduxToolkit/Slices/RootReducer";
import ImageGeneral from "../../../Ui/image";
import { CreditUser, DetailUser, NameUser } from "./styles";

export default function UserInfo({
  isShowBoxProfile,
}: {
  isShowBoxProfile?: boolean;
}) {
  const users = useSelector((state: RootState) => state.app?.user);

  return (
    <DetailUser isBoxProfile={isShowBoxProfile ?? false}>
      <NameUser>
        {users?.lastName} <span>{users?.firstName}</span>
      </NameUser>
      <CreditUser>
        <ImageGeneral src={icCredits1} alt="" />
        <span>{users?.credits} </span>
        {users?.credits && users?.credits > 1 ? "credits" : "credit"}
      </CreditUser>
    </DetailUser>
  );
}
