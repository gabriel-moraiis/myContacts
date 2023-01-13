import httpClient from './utils/httpClient';

class CategoriesService {

  constructor() {
    this.httpClient = new httpClient('http://localhost:3001');
  }

  async listCategories() {
    return this.httpClient.get('/categories');
  }
}

export default new CategoriesService;
