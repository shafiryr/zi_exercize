import { Component, OnDestroy, OnInit } from '@angular/core';
import { ListItem } from '../../common/models/list-item';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators'
import { Member } from '../../common/models/member';
import {
  MembersState,
  getMembersSelector,  
  getSelectedMemberSelector,  
  getMembersLoadingSelector,
  getMembersLoadedSelector  
} from "../../ngrx/state/members.state";
import {
  FetchMembers,
  SetSelectedMember,
  FetchMemberHierarchy
} from "../../ngrx/action/members.actions";
import { Store, select } from "@ngrx/store";


@Component({
  selector: 'zi-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit, OnDestroy {
  listItems$: Observable<ListItem[]>;  
  membersIsLoading$: Observable<Boolean>; 
  membersIsLoaded$: Observable<Boolean>; 
  subscriptions: Subscription = new Subscription();
  selectedMember: ListItem;
  isLoading: boolean;
  delimiter: string = ' -> ';

  constructor(private membersStore: Store<MembersState>) {
    this.listItems$ = this.membersStore.select(getMembersSelector)
      .pipe(map(members => {        
        return members.map(member => {
          return {
            id: member.id,
            label: member.name
          } as ListItem
        })
      }));        

           
    this.subscriptions = this.membersStore.select(getSelectedMemberSelector).subscribe(member => {      
      if (member) {
        this.selectedMember = {
          id: member.id,
          label: member.name
        } as ListItem;        
      }
    }); 
    
    this.membersIsLoading$ = this.membersStore.select(getMembersLoadingSelector);  
    this.membersIsLoaded$ = this.membersStore.select(getMembersLoadedSelector);   
  }

  ngOnInit() {
    this.membersStore.dispatch(FetchMembers());    
  }

  memberSelected(member: ListItem) {    
    this.membersStore.dispatch(SetSelectedMember({ selectedMemberId: member.id }));
    this.membersStore.dispatch(FetchMemberHierarchy({ memberId: member.id })); 
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
