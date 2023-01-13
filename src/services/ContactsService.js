import httpClient from './utils/httpClient';

class ContactsService {

  constructor() {
    this.httpClient = new httpClient('http://localhost:3001');
  }

  async listContacts(orderBy = 'asc') {
    return this.httpClient.get(`/contacts?orderBy=${orderBy}`);
  }
}

export default new ContactsService;
