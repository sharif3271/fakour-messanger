import { Directive, Output, EventEmitter, ElementRef, OnInit, AfterViewInit, OnDestroy,} from "@angular/core";
import { debounceTime, Subject } from "rxjs";

@Directive({
    selector: '[scrollHeight]'
})
export class ScrollHeightChangeDirective implements OnInit, AfterViewInit, OnDestroy {
  @Output() ngUpdateHeight = new EventEmitter<{height: number; innerHeihgt: number}>();
  domElementObserver!: MutationObserver;
  changeListSubject$ = new Subject<void>();
  outPutEmmiterWithDebounce$ = this.changeListSubject$.pipe(debounceTime(50));
  mutationConfig = { childList: true };

  constructor(private elementRef: ElementRef<HTMLDivElement>) {
    this.outPutEmmiterWithDebounce$.subscribe({
      next: () => {
        this.ngUpdateHeight.emit({
          height: this.elementRef.nativeElement.offsetHeight,
          innerHeihgt: this.elementRef.nativeElement.scrollHeight
        })
      }
    })
  }
  ngOnInit(): void {
    this.domElementObserver = new MutationObserver(this.mutationCallback.bind(this))
  }
  ngAfterViewInit(): void {
    this.domElementObserver.observe(this.elementRef.nativeElement, this.mutationConfig);
  }
  ngOnDestroy(): void {
    this.domElementObserver.disconnect();
  }
  mutationCallback(mutationList: MutationRecord[]) {
    for (const mutation of mutationList) {
      if (mutation.type === 'childList') {
        this.changeListSubject$.next();
      }
    }
  }
}