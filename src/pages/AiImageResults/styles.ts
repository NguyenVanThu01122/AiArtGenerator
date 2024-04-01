import styled from "styled-components";
export const WrapperMyAvatars = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  position: relative;
  @media screen and (max-width: 768px) {
    padding: 20px 5px;
  }
`;

export const Loading = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  filter: brightness(0.9);
  img {
    border-radius: 50%;
    width: 152px;
    height: 152px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  @media screen and (max-width: 768px) {
    img {
      width: 100px;
      height: 100px;
    }
  }
`;

export const ContainerImageAi = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;
`;

export const MessageNoPhoto = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  img {
    width: 150px;
    height: 150px;
    object-fit: contain;
  }
`;

export const NoPhoto = styled.div`
  color: red;
  font-size: 20px;
  font-style: italic;
`;

export const SectionPagination = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  .MuiPaginationItem-root {
    color: white;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const DisplayTotalImage = styled.div`
  color: white;
  font-style: italic;
  .select-limit {
    height: 30px;
    color: white;
    margin: 0px 8px;
    background: #242c3d;
  }
  @media screen and (max-width: 768px) {
    font-size: 13px;
    margin-top: 10px;
  }
`;
