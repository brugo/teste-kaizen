import { Component, OnInit } from "@angular/core";
import { User } from "./shared/models/user";
import { Restangular } from "ngx-restangular";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "teste-aplicacao";
  users: Array<User>;

  constructor(private restangular: Restangular) {}

  ngOnInit() {
    User.list(this.restangular).subscribe(response => {
      console.log(response);
      this.users = User.mapManyToModel(this.restangular, response);
    });
  }
}
