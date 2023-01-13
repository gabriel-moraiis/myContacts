import PropTypes from 'prop-types';


import { useEffect, useState } from 'react';
import { Button } from '../Button';
import FormGroup from '../FormGroup';
import { Input } from '../Input';
import { Select } from '../Select';
import { Form } from './styles';

import isEmailValid from '../../Utils/isEmailValid';
import useErrors from '../../hooks/useErrors';
import CategoriesService from '../../services/CategoriesService';
import formatPhone from '../../Utils/formatPhone';


export default function ContactForm({ buttonLabel }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [categoryId, setCategory] = useState('');
  const { setError, removeError, getErrorByFieldName, errors } = useErrors();
  const [categories, setCategories] = useState([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(true);

  const isFormValid = (name && errors.length === 0);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      name, email, phone: formatPhone(phone), categoryId
    });
  };

  useEffect(() => {
    async function loadCategories(){
      try {
        const categories = await CategoriesService.listCategories();

        setCategories(categories);
      } catch {}
      finally {
        setIsLoadingCategories(false);
      }
    }
    0;
    loadCategories();
  }, []);

  const handleNameChange = (event) => {
    setName(event.target.value);

    if (!event.target.value) {
      setError({ field: 'name', message: 'O Nome é obrigatório' });
    } else {
      removeError('name');
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);

    if (event.target.value && !isEmailValid(event.target.value)) {
      setError({field: 'email', message: 'Email inválido'});
    } else {
      removeError('email');
    }
  };

  const handlePhoneChange = (event) => {
    setPhone(formatPhone(event.target.value));
  };

  return (
    <Form onSubmit={handleSubmit} noValidate>

      <FormGroup
        error={getErrorByFieldName('name')}
      >
        <Input
          error={getErrorByFieldName('name')}
          value={name}
          placeholder='Nome *'
          onChange={handleNameChange}
        />
      </FormGroup>

      <FormGroup
        error={getErrorByFieldName('email')}
      >
        <Input
          type='email'
          error={getErrorByFieldName('email')}
          value={email}
          placeholder='Email'
          onChange={handleEmailChange}
        />
      </FormGroup>

      <FormGroup>
        <Input
          value={phone}
          placeholder='Celular'
          onChange={handlePhoneChange}
          maxLength='15'
        />
      </FormGroup>

      <FormGroup isLoading={isLoadingCategories}>
        <Select
          value={categoryId}
          onChange={event => setCategory(event.target.value)}
          disabled={isLoadingCategories}
        >
          <option value="">Sem categoria</option>

          {categories.map(category => (
            <option
              value={category.id}
              key={category.id}
            >
              {category.name}
            </option>
          ))}
        </Select>
      </FormGroup>

      <Button
        type='submit'
        disabled={!isFormValid}
      >
        {buttonLabel}
      </Button>

    </Form>
  );
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired
};
