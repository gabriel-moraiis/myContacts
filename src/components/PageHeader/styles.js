import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  a {
    display: flex;
    text-decoration: none;
    gap: 8px;
    align-items: center;

    img {
      transform: rotate(-90deg);
    }

    span {
      font-weight: 700;
      color: ${({theme}) => theme.colors.primary.main};
    }
  }

  h1 {
    font-size: 24px;
  }
`;
