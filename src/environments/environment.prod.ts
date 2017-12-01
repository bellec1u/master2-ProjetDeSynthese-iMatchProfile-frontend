export const environment = {
  production: true,
  backend: {
    protocol: 'http',
    host: '127.0.0.1',
    port: '8080',
    endpoints: {
      allPostMin: '/api/post/min'
      /*
      allPeople: '/api/people',
      randomPeople: '/api/people/random',
      onePeople: '/api/people/:id'
      */
    }
  }
};
