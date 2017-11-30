import { Injectable } from '@angular/core';
import { Post } from './post';

@Injectable()
export class ListPostService {
  getPostsFromService(): Post[] {
    return[{
      id: 'DFR5533R',
      postName: 'Développeur Java',
      typeCommitment: 'CDI',
      postLocality: 'Nancy',
      created: '12/12/2016'
    }, {
      id: 'DFR4443R',
      postName: 'Développeur C#',
      typeCommitment: 'CDI',
      postLocality: 'Metz',
      created: '12/12/2016'
    }, {
      id: 'DFR45565423R',
      postName: 'Développeur AngularJs',
      typeCommitment: 'CDI',
      postLocality: 'Paris',
      created: '12/12/2016'
    }]
  }
}

