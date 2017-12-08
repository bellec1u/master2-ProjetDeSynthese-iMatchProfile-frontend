export const environment = {
  production: false,
  backend: {
    protocol: 'http',
    host: '0.0.0.0',
    port: '8080',
    endpoints: {
      allPost:      '/imp/api/posts',
      allPostMin:   '/imp/api/posts/min',
      onePost:      '/imp/api/posts/:id',
      oneCandidate: '/imp/api/candidates/:id'
    }
  }
};
