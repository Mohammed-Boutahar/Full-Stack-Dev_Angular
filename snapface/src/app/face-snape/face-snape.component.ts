import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snape.module';

@Component({
  selector: 'app-face-snape',
  templateUrl: './face-snape.component.html',
  styleUrls: ['./face-snape.component.scss']
})
export class FaceSnapeComponent implements OnInit {
  @Input() faceSnape!: FaceSnap;

  buttonText!: string;
  boucle!: number;
  rand!: string;

  ngOnInit() {
    this.buttonText = 'Snaps';

    //useful only for method onSnap()
    this.boucle = 1;
    this.rand= 'Random';
  }

  onSnap(){
    if(this.buttonText === 'Snaps'){
      var i =1;
      var rand = 'Random';
      this.buttonText = rand;
    }
    else{
      this.boucle++;
      this.buttonText = this.rand+this.boucle;
    }
    this.faceSnape.snaps = (Math.floor(Math.random() * (100 - 1 + 1) + 1));
  }
}
