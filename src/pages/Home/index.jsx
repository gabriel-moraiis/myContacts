import {
  Container,
  ErrorContainer,
  Header,
  InputSearchContainer,
  ListHeader,
  EmptyListContainer,
  SearchTermNotFound
} from './styles';
import order from '../../assets/images/order.svg';
import ContactCard from '../../components/ContactCard';
import Loader from '../../components/Loader/index';
import { Link } from 'react-router-dom';
import { useEffect, useMemo, useState, useCallback } from 'react';
import ContactsService from '../../services/ContactsService';

import { Button } from '../../components/Button';

import sad from '../../assets/images/sad.svg';
import emptyBox from '../../assets/images/empty-box.svg';
import magnifierQuestion from '../../assets/images/magnifier-question.svg';

export default function Home() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');
  const [inputSearch, setInputSearch] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const filteredContacts = useMemo(() => (
    contacts.filter(contact => (
      contact.name.toLowerCase().includes(inputSearch.toLowerCase())
    ))
  ), [contacts, inputSearch]);

  const loadContacts = useCallback(async () => {
    try {
      setIsLoading(true);

      const contactsList = await ContactsService.listContacts(orderBy);

      setHasError(false);
      setContacts(contactsList);

    } catch (error) {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, [orderBy]);

  useEffect(() => {

    loadContacts();

  }, [loadContacts]);


  const handleToggleOrderBy = () => {
    setOrderBy(
      (prevState) => prevState === 'asc' ? 'desc' : 'asc'
    );
  };

  const handleChangeSearchInput = (event) => {
    setInputSearch(event.target.value);
  };

  const handleTryAgain = () => {
    loadContacts();
  };

  return (
    <Container>
      <Loader isLoading={isLoading} />

      {(contacts.length > 0 && !hasError) && (
        <InputSearchContainer>
          <input
            type="text"
            placeholder='Pesquisar contato...'
            onChange={handleChangeSearchInput}
            value={inputSearch}
          />
        </InputSearchContainer>
      )}

      <Header
        justifyContent={
          hasError
            ? 'flex-end'
            : (
              contacts.length > 0
                ? 'space-between'
                : 'center'
            )
        }
      >
        {(!hasError && contacts.length > 0) && (
          <strong>
            {filteredContacts.length}
            {filteredContacts.length === 1 ? ' contato' : ' contatos'}
          </strong>
        )}
        <Link to='/new'>
          Novo Contato
        </Link>
      </Header>

      {hasError && (
        <ErrorContainer>
          <img src={sad} alt="Sad" />
          <div className="details">
            <strong>Ocorreu um erro ao obter os seus contatos</strong>
            <Button onClick={handleTryAgain}>Tentar Novamente</Button>
          </div>
        </ErrorContainer>
      )}

      {!hasError && (
        <>
          {(contacts.length < 1 && !isLoading) && (
            <EmptyListContainer>
              <img src={emptyBox} alt="Empty Box" />
              <p>Você ainda não tem nenhum contato cadastrado!
                Clique no botão <strong>”Novo contato”</strong> à cima para cadastrar o seu primeiro!</p>
            </EmptyListContainer>
          )}

          {(contacts.length > 0 && filteredContacts.length < 1) && (
            <SearchTermNotFound>
              <img src={magnifierQuestion} alt="Magnifier Question" />
              <span>Nenhum resultado foi encontrado para <strong>{inputSearch}</strong>.</span>
            </SearchTermNotFound>
          )}

          {filteredContacts.length > 0 && (
            <ListHeader orderBy={orderBy}>
              <button type='button' onClick={handleToggleOrderBy}>
                <span>Nome</span>
                <img src={order} alt="Seta para ordenar contatos" />
              </button>
            </ListHeader>
          )}
          {filteredContacts.map(contact => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </>
      )}
    </Container>
  );
}


