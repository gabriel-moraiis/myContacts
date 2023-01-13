import styled, {css} from 'styled-components';

export const Input = styled.input`
  width: 100%;
  height: 52px;
  background: #FFF;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border: 2px solid #FFF;
  border-radius: 4px;
  outline: none;
  padding: 0 16px;
  transition: all 0.2s ease-in;
  appearance: none;

  &:focus {
    border: 2px solid ${({theme}) => theme.colors.primary.main};
  }

  &::placeholder {
    color: ${({theme}) => theme.colors.gray[200]};
  }

  ${({theme, error}) => error && css`
    color: ${theme.colors.danger.main};
    border-color: ${theme.colors.danger.main} !important;
  `}
`;
