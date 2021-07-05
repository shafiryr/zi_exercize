import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MembersService } from '../../pages/services/members.service';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { catchError, map, mergeMap, concatMap } from 'rxjs/operators';
import {
  FetchMemberInfo,
  FetchMemberInfoSuccess,
  FetchMemberInfoFailure,
  FetchMembers,
  FetchMembersFailure,
  FetchMembersSuccess,
  FetchMemberHierarchy,
  FetchMemberHierarchySuccess,
  FetchMemberHierarchyFailure
} from '../action/members.actions';

import * as _ from 'lodash';
import { __generator } from 'tslib';

@Injectable()
export class MembersEffects {

  constructor(private actions$: Actions,
    private membersService: MembersService) { }

  public fetchMembers$ = createEffect((): Observable<Action> =>
    this.actions$
      .pipe(
        ofType(FetchMembers),
        mergeMap(() => {
          return this.membersService.getMembers()
            .pipe(
              map((resp) => FetchMembersSuccess({ total: _.get(resp, 'total'), members: _.get(resp, 'members'), err: '' })),
              catchError((err) => of(FetchMembersFailure({ err: _.get(err, 'error.message') })))
            );
        })
      ));

  public FetchMemberInfo$ = createEffect((): Observable<Action> =>
    this.actions$
      .pipe(
        ofType(FetchMemberInfo),
        concatMap(action => {
          return this.membersService.getMemberInfo(action.memberId)
            .pipe(
              map((resp) => FetchMemberInfoSuccess({ member: _.get(resp, 'member'), err: '' })),
              catchError((err) => of(FetchMemberInfoFailure({ err: _.get(err, 'error.message') })))
            );
        })
      ));

  public fetchMemberHierarchy$ = createEffect((): Observable<Action> =>
    this.actions$
      .pipe(
        ofType(FetchMemberHierarchy),
        concatMap(action => {
          return this.membersService.getMemberHierarchy(action.memberId)
            .pipe(
              map((resp) => FetchMemberHierarchySuccess({ hierarchy: _.get(resp, 'hierarchy'), err: '' })),
              catchError((err) => of(FetchMemberHierarchyFailure({ err: _.get(err, 'error.message') })))
            );
        })
      ));
}
