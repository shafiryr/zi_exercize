import { createAction, props } from '@ngrx/store';
import { Member } from '../../common/models/member';


// Fetch Members
export const FetchMembers = createAction(
  '[Members] FETCH_MEMBERS'
);

export const FetchMembersSuccess = createAction(
  '[Members] FETCH_MEMBERS_SUCCESS',
  props<{ total: number, members: Array<Member>, err: string }>()
);

export const FetchMembersFailure = createAction(
  '[Family] FETCH_MEMBERS_FAILURE',
  props<{ err: string }>()
);

// set selected value
export const SetSelectedMember = createAction(
  '[Member] SET_SELECTED_MEMBER',
  props<{ selectedMemberId: string }>()
);

// clear selected value
export const ClearSelectedMember = createAction(
  '[Member] CLEAR_SELECTED_MEMBER'  
);

// Fetch Member Info
export const FetchMemberInfo = createAction(
  '[Member] FETCH_MEMBER_INFO',
  props<{ memberId: string }>()
);

export const FetchMemberInfoSuccess = createAction(
  '[Member] FETCH_MEMBER_INFO_SUCCESS',
  props<{ member: Member, err: string }>()
);

export const FetchMemberInfoFailure = createAction(
  '[Member] FETCH_MEMBER_INFO_FAILURE',
  props<{ err: string }>()
);

// Fetch Member's Hierarchy
export const FetchMemberHierarchy = createAction(
  '[Hierarchy] FETCH_MEMBER_HIERARCHY',
  props<{ memberId: string }>()
);

export const ClearMemberHierarchy = createAction(
  '[Hierarchy] CLEAR_MEMBER_HEIRARCHY'  
);

export const FetchMemberHierarchySuccess = createAction(
  '[Hierarchy] FETCH_MEMBER_HIERARCHY_SUCCESS',
  props<{ hierarchy: string, err: string }>()
);

export const FetchMemberHierarchyFailure = createAction(
  '[Hierarchy] FETCH_MEMBER_HIERARCHY_FAILURE',
  props<{ err: string }>()
);
