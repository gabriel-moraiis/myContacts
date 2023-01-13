import delay from '../../Utils/delay';

import APIError from '../../errors/APIError';

class httpClient {

  constructor(baseURL){
    this.baseURL = baseURL;
  }

  async get(path) {
    await delay(500);

    const response = await fetch(
      `${this.baseURL}${path}`
    );

    let body = null;
    const contentType = response.headers.get('Content-Type');

    if(contentType.includes('application/json')){
      body = await response.json();
    }

    if(response.ok){
      return body;
    }

    throw new APIError(
      response, body
    );
  }
}

export default httpClient;
