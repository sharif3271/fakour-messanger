import { Directive, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({ selector: '[scrollDate]' ,
})
export class DateScrollDirecive implements OnInit {


  @HostListener('scroll',['$event']) onScroll($event: Event): void {
    
    //console.log($event);
  }

  ngOnInit(): void {
      //console.log("asd");
  }

  // constructor(private renderer2: Renderer2) {
  //   this.listener = this.renderer2.listen('window', 'scroll', (e) => {
  //     console.log(this.getYPosition(e));
  //   });
  // }

}
