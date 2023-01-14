import styled from 'styled-components';



export const Container = styled.div`


  small {
    color: ${({ theme }) => theme.colors.danger.main};
    font-size: 12px;
    display: block;
    margin-top: 8px;
  }

  & + & {
    margin-top: 16px;
  }

  .form-item {
    position: relative;
  }

  .loader {
    position: absolute;
    top: 18px;
    right: 16px;
  }
`;
