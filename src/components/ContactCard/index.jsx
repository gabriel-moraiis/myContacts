import propTypes from 'prop-types';

import { Container } from './styles';

import deleteIcon from '../../assets/images/delete.svg';

import edit from '../../assets/images/edit.svg';
import { Link } from 'react-router-dom';

export default function ContactCard({contact}) {
  const { category_name, email, id, name, phone } = contact;

  return(
    <Container>
      <div className="contacts-info">
        <div className="header-infos">
          <strong>{name}</strong>
          {category_name && (
            <small>{category_name}</small>
          )}
        </div>
        <span>{email}</span>
        <span>{phone}</span>
      </div>

      <div className="actions-buttons">
        <Link to={`/edit/${id}`}>
          <img src={edit} alt="Editar Contato" />
        </Link>
        <button type='button'>
          <img src={deleteIcon} alt="deletar" />
        </button>
      </div>
    </Container>
  );
}

ContactCard.propTypes = {
  contact: propTypes.object.isRequired
};
