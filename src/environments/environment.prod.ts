export const environment = {
  production: false,
  backend: {
    protocol: 'http',
    host: '0.0.0.0',
    port: '8080',
    endpoints: {
      allPostMin:   '/imp/api/posts',
      onePost:      '/imp/api/posts/:id',
      oneCandidate: '/imp/api/candidates/:id',
      allCandidate: '/imp/api/candidates',
      postSkill: '/imp/api/postskills/:id',
      listPostRecruiter: '/imp/api/posts/:id/recruiter'
    }
  }
};
