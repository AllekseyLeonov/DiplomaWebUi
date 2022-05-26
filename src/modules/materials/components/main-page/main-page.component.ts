import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {setUserData} from "../../../user/store/actions";
import {User} from "../../../../models/User";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(setUserData({user: JSON.parse(localStorage.getItem('diploma-user')!) as User | null}))
  }

}
