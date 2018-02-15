import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../shared/services/candidate-service/candidate.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Candidate } from '../shared/interfaces/candidate';

import * as jsPDF from 'jspdf';

import 'rxjs/add/operator/mergeMap';
import {AuthenticationService} from '../shared/authentication/authentication.service';


@Component({
  selector: 'app-candidate-profile',
  templateUrl: './candidate-profile.component.html',
  styleUrls: ['./candidate-profile.component.css']
})
export class CandidateProfileComponent implements OnInit {

  /**
   * Property to store the candidate
   */
  private _candidate: any;

  /**
   * Property specifiying if the current profile was not found.
   */
  private _profileNotFound: boolean;

  constructor(private _candidateService: CandidateService,
              private _route: ActivatedRoute,
              private _router: Router,
              private _authentication: AuthenticationService) {
  }

  ngOnInit() {
    this._route.params
      .filter(params => !!params['id'])
      .flatMap(params => this._candidateService.fetchOne(params['id']))
      .subscribe((candidate: any) => {
          this._candidate = candidate;
        },
        (error: any) => {
          if (error.status === 404) {
            this._profileNotFound = true;
          }
        }
      );
  }

  get candidate() {
    return this._candidate;
  }

  get profileNotFound(): boolean {
    return this._profileNotFound;
  }

  /**
   * Function to update the candidate profile.
   * @param {Candidate} candidate
   */
  update(candidate: any) {
      this._candidateService.update(candidate)
        .subscribe((cand: Candidate) =>
          this._candidate = cand);
  }

  /**
   * Function to suspend or unsuspend the candidate profile.
   */
  suspend(reverse: boolean) {
    this.candidate.user.state = reverse ? 'OK' : 'SUSPENDED';
    this._candidateService
      .update(this._candidate)
      .subscribe((cand: Candidate) => this._candidate = cand);
  }

  /**
   * Function to delete the candidate profile.
   */
  delete() {
    this._authentication.logout();
    this._candidateService
      .delete(this._candidate.id)
      .subscribe(() => this._router.navigate(['/home']));
  }

  contact() {}

  proposePost() {}

  signal() {}

  isRecruiter(): boolean {
    return this._authentication.isRecruiter();
  }

  isCandidate(): boolean {
    return this._authentication.isCandidate();
  }

  isOwner(): boolean {
    return this._authentication.getId() == this._candidate.id;
  }

  isConnected(): boolean {
    return this._authentication.isConnected();
  }

  /**
   * Function to generate the candidate cv
   */
  generatecv() {
    const doc = new jsPDF();
    // TODO : Modifier avec l'image du candidat
    /* tslint:disable:max-line-length */
    const img = 'data:image/jpeg;base64,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';
    /* tslint:enable:max-line-length */
    doc.addImage(img, 'JPEG', 80, 5, 40, 40)
    doc.setFontSize(22);
    doc.text(this.candidate.user.lastname + ' ' + this.candidate.user.firstname, 20, 60);
    doc.setFontSize(14);
    const strArr = doc.splitTextToSize(this.candidate.description, 180);
    doc.text(strArr, 20, 70);
    doc.setTextColor(100);
    doc.text(this.candidate.user.email, 20, 85);
    doc.setDrawColor(38, 38, 38);
    doc.setLineWidth(0.5);
    doc.line(20, 90, 190, 90);
    doc.setFontSize(20);
    doc.text('Formations', 20, 98);
    let lineText = 100;
    doc.setTextColor(0);
    for (let i = 0; i < this.candidate.educations.length; i++) {
      doc.setFontSize(14);
      doc.setFontType('bold');
      doc.text(this.candidate.educations[i].name, 20, lineText + 10);
      doc.setFontType('normal');
      doc.text(this.candidate.educations[i].description, 20, lineText + 15);
    doc.text('Année d\'obtention : ' + this.candidate.educations[i].obtainingDate, 20, lineText + 20);
      lineText = lineText + 20;
    }
    doc.line(20, lineText + 10, 190, lineText + 10);
    doc.setFontSize(20);
    doc.setTextColor(100);
    doc.text('Compétences', 20, lineText + 18);
    doc.setTextColor(0);
    lineText = lineText + 2;
    for (let i = 0; i < this.candidate.skills.length; i++) {
      // TODO : GROUP SKILLS BY TYPE
      doc.setFontSize(14);
      doc.setFontType('normal');
      doc.text(this.candidate.skills[i].description, 20, lineText + 25);
      lineText = lineText + 5;
    }
    doc.save(this.candidate.user.lastname + this.candidate.user.firstname + 'Profile');
  }
}
