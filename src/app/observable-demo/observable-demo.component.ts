import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-observable-demo',
  imports: [],
  templateUrl: './observable-demo.component.html',
  styleUrl: './observable-demo.component.css'
})
export class ObservableDemoComponent {

  myobservable$

  constructor(){
    // this.myobservable$ = new Observable((observer)=>{
    //   // Observer emits the values or the errors or mark observable as complete
    //   // 1. Next State (Emit the next values)
    //   // 2. Error State (Emit the error)
    //   // 3. Complete State (Marks the observable as complete)
    //   let count = 0 ;
      
    //   setInterval(()=>{
    //     if(count<=5){
    //       observer.next(new Date().getTime())
    //       count++
    //     }
    //    else{
    //     observer.complete()
    //    }
    //   }, 1000)

      
    // })

    // this.myobservable$.subscribe({
    //   next: (val)=>console.log(val),
    //   error: (err)=>console.log(err),
    //   complete: ()=>console.log("My Observable Completed")
    // })

    this.myobservable$ = of(1,2,3,4)

    this.myobservable$.subscribe({
      next: (n)=>console.log(n)
    })
  }

}
