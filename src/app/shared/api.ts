import { Restangular } from "ngx-restangular";
import { mapPayloadToAttribute } from "./helpers/mapper.helper";
import { Attribute } from "./helpers/attribute.helper";
import { Observable } from "rxjs";

export class API {
  protected static url: string;
  private url: string;
  id = new Attribute("");

  constructor(private restangular: Restangular, url: string) {
    this.url = url;
    this.restangular = restangular;
  }

  static list(restangular: Restangular, queryParams?: any): Observable<any> {
    return restangular
      .all(this.url.replace("{", "").replace("}", ""))
      .customGET("", queryParams);
  }

  static mapManyToModel<T extends typeof API>(
    restangular: Restangular,
    payload: Array<any>
  ): Array<any> {
    const models = [];
    for (const element of payload) {
      // Little hack for instanciating the caller
      let instance = Object.create(this.prototype as InstanceType<T>)
        .constructor;
      instance = new instance(restangular, this.url);
      mapPayloadToAttribute(instance, element);
      models.push(instance);
    }
    return models;
  }
}
