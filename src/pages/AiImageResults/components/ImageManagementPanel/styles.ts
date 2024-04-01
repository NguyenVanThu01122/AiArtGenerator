import styled from "styled-components";

export const BoxOptions = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  .select-date {
    width: 200px;
    height: 40px;
    color: white;
    background: #242c3d;
  }
`;

export const SelectImage = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: white;
  Button {
    border: none;
    color: white;
    font-weight: bold;
  }
  .btn-select-all,
  .btn-select {
    width: 120px;
    background: linear-gradient(217deg, #e250e5, #4b50e6) !important;
  }
  .btn-delete {
    background-color: red !important;
  }
`;

export const GroupButton = styled.div`
  display: flex;
  gap: 10px;
  .btn-cancel-all {
    background: linear-gradient(90deg, #f23061 -7.43%, #faa227);
    color: white;
  }
`;

export const ListPhoto = styled.div`
  font-weight: bold;
  font-size: 22px;
  color: white;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
  @media screen and (max-width: 768px) {
    display: block;
    ${ListPhoto} {
      margin-bottom: 20px;
    }
    ${BoxOptions} {
      display: flex;
      justify-content: space-between;
      .select-sort-date {
        .select-date {
          width: 120px;
        }
      }
      ${SelectImage} {
        button {
          font-size: 14px;
        }
      }
    }
  }
`;
