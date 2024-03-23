import styled from "styled-components";

export const Wrapper = styled.div``;

export const BoxPrompt = styled.div`
  margin-top: 25px;
  .custom-textarea {
    height: 150px !important;
    width: 100%;
    color: white;
    padding: 12px;
    border-radius: 8px;
    border: 1px solid var(--glass-stroke, rgba(255, 255, 255, 0.08));
    background: var(--bg-input-form, #23202c);
    outline: none;
    &::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }
    @media screen and (max-width: 768px) {
    }
  }
`;

export const HeaderPrompt = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TitleHeader = styled.div`
  color: white;
  font-weight: 800;
  font-size: 17px;
`;

export const GroupTool = styled.div`
  display: flex;
  gap: 10px;
  cursor: pointer;
`;

export const ContentPrompt = styled.div`
  color: rgba(255, 255, 255, 0.5);
  margin: 5px 0px;
  font-size: 13px;
  font-weight: bold;
`;

export const PromptTitle = styled.div`
  color: white;
  font-size: 14px;
  margin: 15px 0px;
`;

export const PromptNegative = styled.div`
  .custom-textarea {
    width: 100%;
    height: 100px !important;
    color: white;
    padding: 12px;
    border-radius: 8px;
    outline: none;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: #23202c;
    &::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }
    &::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }
    @media screen and (max-width: 768px) {
    }
  }
`;

export const TitleNegative = styled.div`
  color: white;
  margin: 15px 0px;
  font-size: 14px;
`;
