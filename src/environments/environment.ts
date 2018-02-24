// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

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
      allPost: '/imp/api/posts',
      onePost: '/imp/api/posts/:id',
      allPostForRecruiter: '/imp/api/recruiters/:id/posts',
      matchingCandidatePost: '/imp/api/posts/:id/bySkills',
      msMatchingCandidate : '/imp/api/posts/:id/candidatebyMandatorySkills',
      associatedCandidate : '/imp/api/posts/:id/associatedCandidate',
      associateOneCandidate : '/imp/api/posts/:id/associatedOneCandidate',
      getMyOffers : '/imp/api/candidates/:id/offers',
      acceptOffers : '/imp/api/candidates/:id/offers',
      refuseOffers : '/imp/api/candidates/:id/offers',
      allSkill: '/imp/api/skills',
      login: '/imp/api/login',
      conversationForUser: '/imp/api/conversations/forUser/:id',
      conversationBetweenUser: '/imp/api/conversations/:id1/:id2',
      conversationForPostOwner: '/imp/api/conversations/:idUser/ownerOf/:idPost'
    }
  }
};
