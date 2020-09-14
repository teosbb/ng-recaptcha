import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { RecaptchaFormsModule, RecaptchaModule, RECAPTCHA_LANGUAGE } from 'ng-recaptcha';

import { parseLangFromHref } from '../../parse-lang-from-href';
import { FormsDemoComponent } from './forms-demo.component';
import { settings } from './forms-demo.data';

const routes: Routes = [
  {
    path: '',
    component: FormsDemoComponent,
    data: { page: settings },
  },
];

@NgModule({
  declarations: [FormsDemoComponent],
  imports: [
    RouterModule.forChild(routes),
    RecaptchaModule,
    RecaptchaFormsModule,
    FormsModule,
    CommonModule,
  ],
  providers: [
    { provide: RECAPTCHA_LANGUAGE, useValue: parseLangFromHref() },
  ],
})
export class DemoModule { }
