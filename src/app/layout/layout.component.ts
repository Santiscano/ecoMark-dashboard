import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';

import { LayoutType } from './layout';

import { ClassyComponent } from './layouts/vertical/classy/classy.component';
import { AppConfig } from '@app/core/config/app.config';

@Component({
  selector: 'layout',
  standalone: true,
  imports: [CommonModule, ClassyComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class LayoutComponent implements OnInit, OnDestroy {

  // config: AppConfig;
  layout: LayoutType = 'classy';
  // scheme: 'dark' | 'light';
  // theme: string;
  private _unsubscribeAll: Subject<any> = new Subject<any>();

  constructor() {}

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  ngOnInit(): void {
    console.log('LayoutComponent initialized');
  }

  ngOnDestroy(): void {
    console.log('LayoutComponent destroyed');
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Private methods
  // -----------------------------------------------------------------------------------------------------
  /**
     * Update the selected layout
     */
  private _updateLayout(): void {}

  /**
  * Update the selected scheme
  *
  * @private
  */
  private _updateScheme(): void {}

  /**
  * Update the selected theme
  *
  * @private
  */
  private _updateTheme(): void {}
}
