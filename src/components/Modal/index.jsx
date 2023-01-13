import ReactDOM from 'react-dom';

import { Button } from '../Button';
import { Actions, Container, ModalOverlay } from './styles';

import PropTypes from 'prop-types';

export default function Modal({ danger }) {

  return (
    ReactDOM.createPortal(
      <ModalOverlay>
        <Container danger={danger}>
          <h1>Titulo do modal</h1>
          <p>Texto</p>
          <Actions>
            <button className='cancel'>Cancelar</button>
            <Button type='button' danger={danger}>
              Deletar
            </Button>
          </Actions>
        </Container>
      </ModalOverlay>,
      document.getElementById('modal-root')
    )
  );
}

Modal.propTypes = {
  danger: PropTypes.bool,
};
