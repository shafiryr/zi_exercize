import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {accountFeatureSelector, AccountState} from '../../../ngrx/state/account.state';
import {MembersState} from '../../../ngrx/state/members.state';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {CookieService} from 'ngx-cookie-service';
import {AppConfig} from '../../../app.config';
import {Router} from '@angular/router';
import {
  ClearSelectedMember,
  ClearMemberHierarchy
} from '../../../ngrx/action/members.actions';

@Component({
  selector: 'zi-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  accountName$: Observable<string>;

  constructor(private accountStore: Store<AccountState>,
              private membersStore: Store<MembersState>,
              private cookiesService: CookieService,
              private router: Router) {}

  ngOnInit() {
    this.accountName$ = this.accountStore.select(accountFeatureSelector)
      .pipe(
        map((accountState): string => {
          return accountState.id && accountState.name ? `${accountState.id} - ${accountState.name}` : '';
        })
      );
  }

  logout() {
    this.cookiesService.delete(AppConfig.SESSION_COOKIE_NAME, '/');
    this.membersStore.dispatch(ClearSelectedMember());
    this.membersStore.dispatch(ClearMemberHierarchy());
    this.router.navigate(['./login']);
  }

}
