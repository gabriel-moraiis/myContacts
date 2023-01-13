import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

`;

export const Header = styled.header`
    margin-top: 36px;
    display: flex;
    align-items: center;
    justify-content: ${({justifyContent}) => justifyContent};
    border-bottom: 2px solid ${({theme}) => theme.colors.gray[100]};
    padding-bottom: 16px;


    strong {
      font-size: 24px;
    }

    a {
      font-weight: bold;
      border: 2px solid #5061FC;
      border-radius: 4px;
      padding: 12px 14px;
      background-color: transparent;
      color: ${({ theme }) => theme.colors.primary.main};
      text-decoration: none;

      &:hover {
        background-color: ${({ theme }) => theme.colors.primary.main};
        color: #fff;
        transition: all 0.3s ease-in;
      }
    }
`;

export const ListHeader = styled.header`
      margin-top: 24px;
      margin-bottom: 8px;

      button {
        background-color: transparent;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;

        span {
        color: ${({ theme }) => theme.colors.primary.main};
        font-weight: bold;
      }

      img {
        transform: ${({ orderBy }) => orderBy === 'asc' ? 'rotate(180deg)' : 'rotate(0deg)'};
        transition: transform 0.2s ease-in;
      }

      }


`;

export const InputSearchContainer = styled.div`
  width: 100%;

  input {
    height: 50px;
    width: 100%;
    border: none;
    border-radius: 25px;
    background-color: #fff;
    outline: none;
    padding: 0 16px;

    &::placeholder {
      color: #BCBCBC;
    }
  }
`;

export const ErrorContainer = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
  gap: 24px;

  .details {

    strong {
      font-size: 22px;
      color: ${({theme}) => theme.colors.danger.main};
      display: block;
      margin-bottom: 8px;
    }
  }
`;

export const EmptyListContainer = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    color: ${({theme}) => theme.colors.gray[200]};
    margin-top: 8px;

    strong {
      color: ${({theme}) => theme.colors.primary.main};
    }
  }
`;

export const SearchTermNotFound = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: flex-start;

  span {
    margin-left: 24px;
    color: ${({theme}) => theme.colors.gray[200]};
    word-break: break-word;
  }
`;
