import { Component, OnInit } from '@angular/core';

import { PostService } from '../shared/services/post-service/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Candidate } from '../shared/interfaces/candidate';
import {AuthenticationService} from '../shared/authentication/authentication.service';
import {ConversationService} from '../shared/services/conversation-service/conversation.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  private _post;

  // Property to store the value of the candidates matching for this post
  private _matchingCandidates: Candidate[];
  private _matchingPercentCandidates: any[];
  private _associatedCandidate: any[];
  private _apply: any[];
  private _recruiterId: String;
  private _applied: boolean;



  constructor(private _postService: PostService,
              private _route: ActivatedRoute,
              private _router: Router,
              private _authentication: AuthenticationService,
              private _conversationService: ConversationService) {
    this._post = {};
    this._matchingCandidates = [];
    this._associatedCandidate = [];
    this._apply = [];
  }

  ngOnInit() {
    this._route.params
      .filter(params => !!params['id'])
      .flatMap(params => this._postService.isMyPost(params['id']))
      .subscribe((r: any) => {
          this._recruiterId = r.id;
        }
      );
    this._route.params
      .filter(params => !!params['id'])
      .flatMap(params => this._postService.fetchOne(params['id']))
      .subscribe((post: any) => {
          this._post = post;
        }
      );
    // matching user with mandatory skills
    this._route.params
      .filter(params => !!params['id'])
      .flatMap(params => this._postService.getMatchingUserByMandatorySkills(params['id']))
      .subscribe((candidates: Candidate[]) => {
        this._matchingCandidates = candidates;
        }
      );

    // matching users with percent
    this._route.params
      .filter(params => !!params['id'])
      .flatMap(params => this._postService.fetchMatchingPercent(params['id']))
      .subscribe((candidates: any[]) => {
          this._matchingPercentCandidates = candidates;
        }
      );

    // associatedCandidate
    this._route.params
      .filter(params => !!params['id'])
      .flatMap(params => this._postService.getAssociatedCandidateByPostId(params['id']))
      .subscribe((a: any[]) => {
        this._associatedCandidate = a;
        }
      );

    this._route.params
      .filter(params => !!params['id'])
      .flatMap(params => this._postService.getApplyUserByPost(params['id']))
      .subscribe((c: any[]) => {
          this._apply = c;
        }
      );
  }

  isAssociatedCandidate(idc): boolean {
    for (let i = 0; i < this._associatedCandidate.length; i++) {
      if (this._associatedCandidate[i].candidat.id === idc) {
        return true;
      }
    }
    return false;
  }

  get post() {
    return this._post;
  }

  applied(): boolean {
    return this._applied;
  }

  get matchingCandidates(): any[] {
    return this._matchingCandidates;
  }

  get matchingPercentCandidates(): any[] {
    return this._matchingPercentCandidates;
  }

  get associatedCandidate(): any[] {
    return this._associatedCandidate;
  }

  get apply(): any[] {
    return this._apply;
  }

  associateOneCandidate(postId, candidateId) {
    this._postService.associateOneCandidateToPost(postId, candidateId).subscribe();
    this.ngOnInit();
  }

  delete() {
    this._postService
      .delete(this._post.id)
      .subscribe(_ => {
        this._router.navigate(['home']);
    });
  }

  contact(message) {
    this._conversationService
      .sendMessageForPostOwner(message, this._authentication.getIdUser(), this._post.id)
      .subscribe(_ => _);
  }

  Signaler() {}



  Postuler() {
    this._postService.applyToPost(this._post.id, this._authentication.getId())
      .subscribe(result => {
          this._applied = true;
        },
        error => {
          this._applied = false;
        }
      );
  }

  isRecruiter(): boolean {
    return this._authentication.isRecruiter();
  }

  test(): boolean {
    if (this._matchingCandidates.length > 0) {
      return true;
    }
    return false;
  }
  isMyPost(): boolean {
        if (this._recruiterId == this._authentication.getId() &&  this.isRecruiter() === true) {
          return true;
        }
    return false;
  }

  isCandidate(): boolean {
    return this._authentication.isCandidate();
  }

  isConnected(): boolean {
    return this._authentication.isConnected();
  }

}
