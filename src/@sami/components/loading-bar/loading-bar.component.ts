import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';


@Component({
  selector: 'loading-bar',
  standalone: true,
  imports: [],
  templateUrl: './loading-bar.component.html',
  styleUrl: './loading-bar.component.scss',
  encapsulation: ViewEncapsulation.None,
  exportAs: 'loadingBar'
})
export class LoadingBarComponent implements OnChanges, OnInit, OnDestroy
{
  @Input() autoMode: boolean = true;
  mode: 'determinate' | 'indeterminate';
  progress: number = 0;
  show: boolean = false;
  private _unsuscribeAll: Subject<any> = new Subject<any>();



  ngOnChanges(changes: SimpleChanges): void {
    console.log('LoadingBarComponent changes', changes);
  }
  ngOnInit(): void {
    console.log('LoadingBarComponent initialized');
  }
  ngOnDestroy(): void {
    console.log('LoadingBarComponent destroyed');
  }

}
