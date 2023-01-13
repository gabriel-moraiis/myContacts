import styled, { css } from 'styled-components';

export const Button = styled.button`
  height: 52px;
  padding: 0 16px;
  background: #CCCCCC;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  border: none;
  color: #fff;
  background-color: ${({ theme }) => theme.colors.primary.main};
  font-weight: bold;
  transition: background-color 0.3s ease-in;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.light};
  };

  &:active{
    background-color: ${({ theme }) => theme.colors.primary.dark};
  };

  &[disabled]{
    background-color: #CCCCCC;
    cursor: default;
  };

  ${({theme, danger}) => danger && css`
    background-color: ${theme.colors.danger.main};

    &:hover {
      background-color: ${({ theme }) => theme.colors.danger.light};
    }

    &:active{
    background-color: ${({ theme }) => theme.colors.danger.dark};
  };

  `}
`;
