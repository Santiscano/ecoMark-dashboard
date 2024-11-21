import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { LoadingBarComponent } from '@sami/components/loading-bar/loading-bar.component';

@Component({
  selector: 'classy-layout',
  standalone: true,
  imports: [
    LoadingBarComponent
  ],
  templateUrl: './classy.component.html',
  styleUrl: './classy.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ClassyComponent implements OnInit, OnDestroy {

  constructor() {}

  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------


  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  ngOnInit(): void {
    console.log('ClassyComponent initialized');
  }
  ngOnDestroy(): void {
    console.log('ClassyComponent destroyed');
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

}
