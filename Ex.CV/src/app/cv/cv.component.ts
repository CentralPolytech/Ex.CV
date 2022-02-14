import {Component, Input, OnInit} from '@angular/core';
import {Cv} from "../model/cv";

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
@Input() cven: Cv | null = null;
  constructor() {
  }
  ngOnInit(): void {
  }
  recevoir(cv: Cv){
    this.cven= cv;
  }
}
