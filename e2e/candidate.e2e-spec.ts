import { CandidatePage } from './Candidate.po';
import {browser} from 'protractor';

describe('imp candidate view', function() {
  let page: CandidatePage;

  beforeEach(() => {
    page = new CandidatePage();
  });

  it('should see user 1 and his infos', () => {
    // go to user 1 view
    page.navigateToUser(1);
    // check infos
    expect(page.getCandidateFirstnameAndLastname().getText()).toEqual('Jean Pierre');
    expect(page.getCandidateDescription().getText()).toEqual('Je cherche un stage !');
    expect(page.getCandidateSkills().count()).toEqual(2);
    // TODO maybe add some tests
  });

});
