import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {Store} from "@ngrx/store";

import {selectedMaterialSelector} from "../../store/selectors";
import {MaterialPreview} from "../../../../models/Material";

@Component({
  selector: 'app-material-preview',
  templateUrl: './material-preview.component.html',
  styleUrls: ['./material-preview.component.css']
})
export class MaterialPreviewComponent implements OnInit, OnDestroy {

  constructor(private store$:Store) { }

  materialSubscription: Subscription | undefined;

  ngOnInit(): void {
    this.materialSubscription = this.material$.subscribe(
      material => this.material = material
    )
  }

  material: MaterialPreview = {
    id: "",
    name: "",
    description: "",
    practiceId: "",
    theoryId: "",
  };

  material$: Observable<MaterialPreview> = this.store$.select(selectedMaterialSelector);

  ngOnDestroy(): void {
    this.materialSubscription?.unsubscribe();
  }
}
