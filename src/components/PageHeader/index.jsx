import { Link } from 'react-router-dom';
import arrow from '../../assets/images/order.svg';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function PageHeader({title}) {

  return(
    <Container>
      <Link to='/'>
        <img src={arrow} alt="" />
        <span>Voltar</span>
      </Link>
      <h1>{title}</h1>
    </Container>
  );
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired
};
