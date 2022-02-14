import {Component, OnInit} from '@angular/core';
import {Cv} from "../model/cv";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  cvs : Cv[]=[];
  constructor() { }

  ngOnInit(): void {
    this.cvs = [
      new Cv(1, '1234', 'Haythem', 'Saad', 'Etudiant', 'rotating_card_profile3.png', 35),
      new Cv(2, '4321', 'Takwa', 'Saad', 'Cadre Administratif', 'rotating_card_profile.png', 25),
      new Cv(3, '5678', 'Bilel', 'Saad', 'Ingénieur', 'rotating_card_profile2.png', 34),
    ]
  }

}
