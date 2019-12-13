import { API } from "../api";
import { Attribute } from "../helpers/attribute.helper";
import { Restangular } from "ngx-restangular";

export class User extends API {
  protected static url = "users";
  constructor(restangular: Restangular) {
    super(restangular, User.url);
    this.id = new Attribute("id");
  }
  name = new Attribute("name", "name");
  username = new Attribute("username", "username");
  email = new Attribute("email", "email");
  address = new Attribute("address", "address");
  phone = new Attribute("phone", "phone");
  website = new Attribute("website", "website");
  company = new Attribute("company", "company");
}
