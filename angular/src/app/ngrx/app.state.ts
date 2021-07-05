import {MemberInfoState, MembersState, MemberHierarchyState} from './state/members.state';
import {ActionReducerMap} from '@ngrx/store';
import {MemberInfoReducer, MembersReducer, MemberHierarchyReducer} from './reducer/members.reducer';
import {AccountState} from './state/account.state';
import {AccountReducer} from './reducer/account.reducer';


export class AppState {
  member: MemberInfoState;
  members: MembersState;
  hierarchy: MemberHierarchyState;
  account: AccountState;    
}

export const appStateReducer: ActionReducerMap<AppState> = {
  member: MemberInfoReducer,
  members: MembersReducer,
  hierarchy: MemberHierarchyReducer,
  account: AccountReducer
};
