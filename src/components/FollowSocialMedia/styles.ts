import styled from "styled-components";

export const FollowOptions = styled.div`
  display: block;
  text-align: center;
  margin-bottom: 25px;
`;

export const TitleFollow = styled.div`
  color: white;
  font-size: 15px;
  font-weight: 600;
  @media screen and (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

export const SelectSocialMedia = styled.div<{ closeMenu: boolean }>`
  margin: 20px;
  display: flex;
  justify-content: center;
  gap: 8px;
  & img {
    width: 18%;
    border-radius: 50%;
    background: rgb(36, 36, 60);
    padding: 10px;
    cursor: pointer;
    transition: transform 0.4s ease; // Hiệu ứng chuyển đổi kích thước, ease hiệu ứng làm mượt//
    width: ${(props: any) => props.closeMenu && "22px"} !important;
    height: ${(props: any) => props.closeMenu && "22px"} !important;
    padding: ${(props: any) => props.closeMenu && "3px"} !important;
    -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);

    &:hover {
      transform: scale(1.2);
      background-color: #03e9f4;
      box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
        0 0 600px #03e9f4;
      -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
    }
    @media screen and (max-width: 768px) {
      width: 30%;
      object-fit: contain;
      background-color: #03e9f4;
      box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
        0 0 600px #03e9f4;
      -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
      transition: transform 0.4s ease; // Hiệu ứng chuyển đổi kích thước, ease hiệu ứng làm mượt//
    }
  }
`;
