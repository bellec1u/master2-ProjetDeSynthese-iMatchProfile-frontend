import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  private _date = '07/11/2016';
  private _ref = 'AP-20161107-1';
  private _name = 'Chef de projet';
  private _exp = '7 dans la fonction de Chef de projet';
  private _salary = 'PM7';
  private _avgSalary = '58 à 70k€';
  private _type = 'CDI';

  private _place = 'Nancy';
  private _organisation = 'Cp-Axions';
  private _service = 'Assistance MOA';
  private _summary = 'Pour l’un de ses clients qui est un grand groupe dans le domaine bancaire,...';
  private _point = 'Certains déplacements au sein de l’Union Européenne peuvent s’avérer\n' +
    'nécessaire.';

  private _formation = '- Bac + 4 (ou plus) et Anglais niveau B2 ---> a revoir';
  private _certification = '- Certified Scrum Master + PMP ---> a revoir';


  constructor() { }

  ngOnInit() {
  }

  Postuler() {}
  Contacter() {}
  Signaler() {}

}
