import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {Store} from "@ngrx/store";

import {selectedMaterialSelector} from "../../store/selectors";
import {MaterialPreview} from "../../../../models/Material";
import {User} from "../../../../models/User";
import {userSelector} from "../../../user/store/selectors";

@Component({
  selector: 'app-material-preview',
  templateUrl: './material-preview.component.html',
  styleUrls: ['./material-preview.component.css']
})
export class MaterialPreviewComponent implements OnInit, OnDestroy {

  constructor(private store$:Store) { }

  buttonsDisabled: boolean = true;
  material$: Observable<MaterialPreview> = this.store$.select(selectedMaterialSelector);

  material: MaterialPreview = {
    id: "",
    name: "",
    description: "",
    practiceId: "",
    theoryId: "",
  };

  user$: Observable<User | null> = this.store$.select(userSelector);
  user: User | null = null;

  materialSubscription: Subscription | undefined;
  userSubscription: Subscription | undefined;

  ngOnInit(): void {
    this.materialSubscription = this.material$.subscribe(
      material => this.material = material
    )
    this.userSubscription = this.user$.subscribe(user=> {
      this.user = user;
      this.buttonsDisabled = user == null;
    })
  }

  ngOnDestroy(): void {
    this.materialSubscription?.unsubscribe();
  }
}
