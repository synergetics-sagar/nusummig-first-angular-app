import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  
  count:number = 0

  handleIncrement(){
    this.count = this.count+1
  }

  handleDecrement(){
    if(this.count!=0){
      this.count = this.count-1
    }
  }

  reset(){
    this.count = 0
  }

}
