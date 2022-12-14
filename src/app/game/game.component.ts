import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  boxes = [
    0,0,0,0,0,
    0,0,0,0,0,
    0,0,1,0,0,
    0,0,0,0,0,
    0,0,0,0,0
  ]

  constructor() { }

  ngOnInit(): void {
  }

  click(index: number){
    //the box itself
    this.boxes[index] = this.boxes[index] == 1 ? 0 : 1;

    //the right box
    let rightIndex = index+1
    let remainder = rightIndex % 5;
    if(remainder != 0){
      this.boxes[index + 1] = this.boxes[index + 1] == 1 ? 0 : 1;
    }
    
    //the left box
    let leftRemainder = index % 5
    if(index == 0 || leftRemainder != 0){
      this.boxes[index - 1] = this.boxes[index - 1] == 1 ? 0 : 1;
    }
    
    //box below
    if(index < 20){
      this.boxes[index + 5] = this.boxes[index + 5] == 1 ? 0 : 1;
      
    }

    //box above
    this.boxes[index - 5] = this.boxes[index - 5] == 1 ? 0 : 1;
  }

}
