class APIError extends Error {
  constructor(response, body) {
    super();

    this.name = 'APIError';
    this.message = body?.message || `${response.status} - ${response.statusText}`;
    this.response = response;
    this.body = body;
  }
}

export default APIError;
