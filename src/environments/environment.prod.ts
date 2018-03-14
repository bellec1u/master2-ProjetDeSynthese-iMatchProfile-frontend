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
      isMyPost: '/imp/api/posts/:idPost/isMyPost',
      matchingCandidatePost: '/imp/api/posts/:id/matchings',
      msMatchingCandidate : '/imp/api/posts/:id/candidateByMandatorySkills',
      applyPost : '/imp/api/posts/:id/apply',
      associatedCandidate : '/imp/api/posts/:id/associatedCandidate',
      associateOneCandidate : '/imp/api/posts/:id/associatedOneCandidate',
      getMyOffers : '/imp/api/candidates/:id/offers',
      actionToOffers : '/imp/api/candidates/:id/offers',
      allSkill: '/imp/api/skills',
      login: '/imp/api/login',
      conversationForUser: '/imp/api/conversations/forUser/:id',
      conversationBetweenUser: '/imp/api/conversations/:id1/:id2',
      conversationForPostOwner: '/imp/api/conversations/:idUser/ownerOf/:idPost',
      allNotificationForCandidate: '/imp/api/notifications/user/:id',
      getApplyUserByPost: '/imp/api/posts/:idPost/apply',
      oneNotification: '/imp/api/notifications/:id'
    }
  }
};
