import { API } from "../api";
import { Attribute } from "../helpers/attribute.helper";
import { Restangular } from "ngx-restangular";

export class Teste extends API {
  protected static url = "teste";
  constructor(restangular: Restangular) {
    super(restangular, Teste.url);
    this.id = new Attribute("id");
  }
  title = new Attribute("title", "title");
  body = new Attribute("body", "body");  
}
