import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  margin-top: 8px;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .contacts-info {
    display: flex;
    flex-direction: column;

    .header-infos{
      display: flex;
      align-items: center;
      gap: 16px;

      small {
        text-transform: uppercase;
        font-weight: bold;
        color: ${({theme}) => theme.colors.primary.main};
        font-size: 12px;
        padding: 3px 6px;
        background-color: ${({theme}) => theme.colors.primary.lighter};
      }
    }

    span {
        font-size: 14px;
        color: ${({theme}) => theme.colors.gray[200]};
      }
  }

  .actions-buttons {
    display: flex;
    align-items: center;
    gap: 8px;

    a, button {
      border: none;
      background-color: transparent;
      cursor: pointer;

      &:last-child {
        color: #f00;
        font-size: 16px;
      }
    }
  }

  & + & {
    margin-top: 16px;
  }
`;
