import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { ListItem } from '../../../common/models/list-item';
import { Store, select } from "@ngrx/store";
import {
  MembersState,
  getMembersSelector,    
  getMemberHierarchySelector,
  getMemberHierarchyLoadingSelector,
  getMemberHierarchyLoadedSelector
} from '../../../ngrx/state/members.state';

@Component({
  selector: 'zi-member-hierarchy',
  templateUrl: './member-hierarchy.component.html',
  styleUrls: ['./member-hierarchy.component.scss']
})
export class MemberHierarchyComponent implements OnInit {    
  membersHierarchy$: Observable<string>;
  hierarchyIsLoading$: Observable<Boolean>;  
  hierarchyIsLoaded$: Observable<Boolean>;  
  listItems$: Observable<ListItem[]>;  

  delimiter: string = ' -> ';

  constructor(private membersStore: Store<MembersState>) { 
    this.membersHierarchy$ = this.membersStore.select(getMemberHierarchySelector);
    this.hierarchyIsLoading$ = this.membersStore.select(getMemberHierarchyLoadingSelector);
    this.hierarchyIsLoaded$ = this.membersStore.select(getMemberHierarchyLoadedSelector);

    //used to get the member's id upon member clicking 
    this.listItems$ = this.membersStore.select(getMembersSelector)
    .pipe(map(members => {      
      return members.map(member => {
        return {
          id: member.id,
          label: member.name
        } as ListItem
      })
    }));     
  }

  ngOnInit(): void {
  }

}
