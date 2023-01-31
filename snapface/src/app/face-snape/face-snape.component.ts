import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snape',
  templateUrl: './face-snape.component.html',
  styleUrls: ['./face-snape.component.scss']
})
export class FaceSnapeComponent implements OnInit {
  title! : string;
  description! : string;
  creationDate! : Date;
  snaps! : number;

  ngOnInit(){
    this.title = 'Picture';
    this.description = 'memories from my travel experience';
    this.creationDate = new Date();
    this.snaps = 6;
  }
}
