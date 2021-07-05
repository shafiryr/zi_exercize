import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Member } from '../../../common/models/member';
import { Store, select } from "@ngrx/store";
import {
  MemberInfoState,
  getMemberInfoSelector,
  getMemberInfoLoadingSelector,
  getMemberInfoLoadedSelector,
  getMemberInfoErrorSelector  
} from "../../../ngrx/state/members.state";
import {
  FetchMemberInfo
} from "../../../ngrx/action/members.actions";

@Component({
  selector: 'zi-member-info',
  templateUrl: './member-info.component.html',
  styleUrls: ['./member-info.component.scss']
})
export class MemberInfoComponent implements OnInit {
  @Input() member: Member;
  @Input() showLoader: boolean;

  member$: Observable<Member>;
  isLoading$: Observable<Boolean>;
  isLoaded$: Observable<Boolean>;
  error$: Observable<string>;  
  memberId: number;

  constructor(private memberInfoStore: Store<MemberInfoState>, private route: ActivatedRoute, private router: Router) {
    this.member$ = this.memberInfoStore.select(getMemberInfoSelector); 
    this.isLoading$ = this.memberInfoStore.select(getMemberInfoLoadingSelector); 
    this.isLoaded$ = this.memberInfoStore.select(getMemberInfoLoadedSelector); 
    this.error$ = this.memberInfoStore.select(getMemberInfoErrorSelector);    
  }

  ngOnInit(): void {
    this.memberId = +this.route.snapshot.paramMap.get('id');    
    this.memberInfoStore.dispatch(FetchMemberInfo({ memberId: this.memberId.toString() }));
  }

  back() {
    this.router.navigate(['./app/members']);
  }

}
