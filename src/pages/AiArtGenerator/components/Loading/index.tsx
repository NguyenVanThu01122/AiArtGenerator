import ImageGeneral from "../../../../components/Ui/image";
import { Wrapper } from "./styles";

export default function Loading() {
  return (
    <Wrapper>
      <ImageGeneral
        className="image-loading"
        src="https://i.imgur.com/iTQoJTn.gif"
        alt=""
      />
    </Wrapper>
  );
}
