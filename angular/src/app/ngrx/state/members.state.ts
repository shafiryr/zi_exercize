import { Member } from '../../common/models/member';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Filters } from '../../common/models/filters';
import { AppConfig } from '../../app.config';

export interface MembersState {
  loading: boolean;
  loaded: boolean;
  total: number;
  members: Member[];
  selectedMemberId: string | null;  
  err: string;
}

export const initialMembersState: MembersState = {
  loading: false,
  loaded: false,
  total: 0,
  members: [],
  selectedMemberId: null,
  err: ''
};

export interface MemberInfoState {
  loading: boolean;
  loaded: boolean;  
  member: Member | null;  
  err: string;
}

export const initialMemberInfoState: MemberInfoState = {
  loading: false,
  loaded: false,
  member: null,
  err: ''
};

export interface MemberHierarchyState {
  loading: boolean;
  loaded: boolean;  
  hierarchy: string | null;
  err: string;
}

export const initialMemberHierarchyState: MemberHierarchyState = {
  loading: false,
  loaded: false,  
  hierarchy: null,
  err: ''
};

//feature selectors
export const membersFeatureSelector = createFeatureSelector<MembersState>('members');

export const memberInfoFeatureSelector = createFeatureSelector<MemberInfoState>('member');

export const memberHierarchyFeatureSelector = createFeatureSelector<MemberHierarchyState>('hierarchy');

//members selectors
export const getMembersSelector = createSelector(membersFeatureSelector, state => state.members);

export const getMembersLoadingSelector = createSelector(membersFeatureSelector, state => state.loading);

export const getMembersLoadedSelector = createSelector(membersFeatureSelector, state => state.loaded);

export const getMembersErrorSelector = createSelector(membersFeatureSelector, state => state.err);

//member info selectors
export const getMemberInfoSelector = createSelector(memberInfoFeatureSelector, state => state.member);

export const getMemberInfoLoadingSelector = createSelector(memberInfoFeatureSelector, state => state.loading);

export const getMemberInfoLoadedSelector = createSelector(memberInfoFeatureSelector, state => state.loaded);

export const getMemberInfoErrorSelector = createSelector(memberInfoFeatureSelector, state => state.err);

//members hierarchy selectors
export const getMemberHierarchySelector = createSelector(memberHierarchyFeatureSelector, state => state.hierarchy);

export const getMemberHierarchyLoadingSelector = createSelector(memberHierarchyFeatureSelector, state => state.loading);

export const getMemberHierarchyLoadedSelector = createSelector(memberHierarchyFeatureSelector, state => state.loaded);

export const getMemberHierarchyErrorSelector = createSelector(memberHierarchyFeatureSelector, state => state.err);

//selected member selectors
export const getSelectedMemberId = createSelector(membersFeatureSelector, state => state.selectedMemberId);

export const getSelectedMemberSelector = createSelector(
  membersFeatureSelector,
  getSelectedMemberId,
  (state: MembersState, selectedMemberId: string) => {    
    return state.members.find(member => member.id === selectedMemberId);
  }
);



