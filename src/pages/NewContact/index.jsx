import ContactForm from '../../components/ContactForm';
import PageHeader from '../../components/PageHeader';

import ContactsService from '../../services/ContactsService';

export default function NewContact() {
  const handleSubmit = async ( formData ) => {
    try {
      const contact = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        category_id: formData.categoryId
      };

      const response = await ContactsService.createContact(contact);

      console.log(response);
    } catch (error) {
      alert('Ocorreu um erro ao cadastrar o usuario');
    }
  };

  return (
    <>
      <PageHeader title='Novo contato'/>
      <ContactForm buttonLabel='Cadastrar' onSubmit={handleSubmit}/>
    </>
  );
}
