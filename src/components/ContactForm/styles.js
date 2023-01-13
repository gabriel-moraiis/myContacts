import styled from 'styled-components';
import { Button } from '../Button';

export const Form = styled.form`
  margin-top: 24px;



  ${Button} {
    margin-top: 24px;
    width: 100%;
  }
`;

export const InputContainer = styled.div`


  & + & {
    margin-top: 16px;
  }

`;
