export const environment = {
  production: false,
  backend: {
    protocol: 'http',
    host: '0.0.0.0',
    port: '8080',
    endpoints: {
      allCandidate: '/imp/api/candidates',
      oneCandidate: '/imp/api/candidates/:id',
      allRecruiter: '/imp/api/recruiters',
      oneRecruiter: '/imp/api/recruiters/:id',
      allPostForRecruiter: '/imp/api/recruiters/:id/posts',
      allPost: '/imp/api/posts',
      onePost: '/imp/api/posts/:id',
      matchingCandidatePost: '/imp/api/posts/:id/bySkills',
      msMatchingCandidate : '/imp/api/posts/:id/candidatebyMandatorySkills',
      allSkill: '/imp/api/skills',
      login: '/imp/api/login'
    }
  }
};
