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
      oneRecruiterPost: '/imp/api/recruiters/:id/post',
      allPost: '/imp/api/posts',
      onePost: '/imp/api/posts/:id',
      matchingCandidatePost: '/imp/api/posts/:id/bySkills',
      allSkill: '/imp/api/skills'
    }
  }
};
