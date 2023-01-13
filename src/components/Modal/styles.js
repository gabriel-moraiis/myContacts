import styled from 'styled-components';

export const ModalOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(3.5px);
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 450px;
  background: #FFFFFF;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  padding: 24px;

  h1 {
    color: ${({theme, danger}) => danger ? theme.colors.danger.main : theme.colors.gray[900]};
    font-size: 22px;
  }

  small {
    display: block;
    margin-top: 8px;
    color: #222
  }
`;

export const Actions = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 32px;
  gap: 8px;

  .cancel {
    background-color: transparent;
    border: none;
    color: ${({theme}) => theme.colors.gray[200]};
  }
`;
