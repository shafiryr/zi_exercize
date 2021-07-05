import {createReducer, on} from '@ngrx/store';
import {initialMemberInfoState, initialMembersState, initialMemberHierarchyState} from '../state/members.state';
import { 
  FetchMemberInfo, 
  FetchMemberInfoSuccess,
  FetchMemberInfoFailure,
  FetchMembers,
  FetchMembersFailure,
  FetchMembersSuccess,  
  FetchMemberHierarchy,
  FetchMemberHierarchySuccess,
  FetchMemberHierarchyFailure,
  ClearMemberHierarchy,
  SetSelectedMember,
  ClearSelectedMember
} from '../action/members.actions';

export const MembersReducer = createReducer(
  initialMembersState,    

  on(FetchMembers, state => ({...state, loading: true, loaded: false})),

  on(FetchMembersSuccess, (state, {total, members, err}) => ({...state, total, members, err, loaded: true, loading: false})),

  on(FetchMembersFailure, (state, action) => ({...state, members: [], err: action.err, loading: false, loaded: true})),

  on(SetSelectedMember, (state, action) => ({...state, selectedMemberId: action.selectedMemberId})),  

  on(ClearSelectedMember, state => ({...state, selectedMemberId: null}))  

);

export const MemberInfoReducer = createReducer(
  initialMemberInfoState,

  on(FetchMemberInfo, state => ({...state, loading: true, loaded: false})),

  on(FetchMemberInfoSuccess, (state, {member, err}) => ({...state, member, err, loaded: true, loading: false})),

  on(FetchMemberInfoFailure, (state, action) => ({...state, member: null, err: action.err, loading: false, loaded: true}))

);

export const MemberHierarchyReducer = createReducer(
  initialMemberHierarchyState,

  on(FetchMemberHierarchy, state => ({...state, loading: true, loaded: false})),  
  
  on(FetchMemberHierarchySuccess, (state, {hierarchy}) => ({...state, hierarchy, loaded: true, loading: false})),

  on(FetchMemberHierarchyFailure, state => ({...state, hierarchy: null, loading: false, loaded: true})),

  on(ClearMemberHierarchy, state => ({...state, hierarchy: null}))

);
