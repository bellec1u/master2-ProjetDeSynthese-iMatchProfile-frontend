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
      associatedCandidate : '/imp/api/posts/:id/associatedCandidate',
      associateOneCandidate : '/imp/api/posts/:id/associatedOneCandidate',
      allSkill: '/imp/api/skills',
      login: '/imp/api/login',
      conversationForUser: '/imp/api/conversations/forUser/:id',
      conversationBetweenUser: '/imp/api/conversations/:id1/:id2',
      conversationForPostOwner: '/imp/api/conversations/:idUser/ownerOf/:idPost'
    }
  }
};
