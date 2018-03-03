import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CandidateService} from '../shared/services/candidate-service/candidate.service';
import {AuthenticationService} from '../shared/authentication/authentication.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {
  private _offers: any[];


  constructor(private _candidateService: CandidateService,
              private _route: ActivatedRoute,
              private _router: Router, private _authentication: AuthenticationService) {
    if ( this._authentication.isRecruiter()) {
      this._router.navigate(['home']);
    } else {
      if ( this._authentication.getId() !== this._route.params['id']) {
        this._router.navigate(['/offer', this._authentication.getId()]);
      }
    }
    this._offers = [];
  }

  ngOnInit() {
    this._route.params
      .filter(params => !!params['id'])
      .flatMap(params => this._candidateService.getMyOffer(params['id']))
      .subscribe((offer: any) => {
          this._offers = offer;
        });
  }

  get offers() {
    return this._offers;
  }

  accept(associateId) {
    this._candidateService.acceptOffer(associateId).subscribe();
    this.ngOnInit();
  }

  refuse(associateId) {
    this._candidateService.refuseOffer(associateId).subscribe();
    this.ngOnInit();
  }

}