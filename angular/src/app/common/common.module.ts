import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NotyComponent} from './components/noty/noty.component';
import {ButtonComponent} from './components/button/button.component';
import {LoaderComponent} from './components/loader/loader.component';
import {AuthService} from './services/auth.service';
import {NotyService} from './services/noty.service';
import {CookieService} from 'ngx-cookie-service';
import {SplitPipe} from './pipes/split.pipe';
import { GetMemberIdPipe } from './pipes/get-member-id.pipe';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    NotyComponent,
    ButtonComponent,
    LoaderComponent,
    SplitPipe,
    GetMemberIdPipe
  ],
  providers: [
    AuthService,
    NotyService,
    CookieService    
  ],
  exports: [
    NotyComponent,
    ButtonComponent,
    LoaderComponent,
    SplitPipe,
    GetMemberIdPipe
  ],
  entryComponents: []
})
export class ZiCommonModule {
}
