export class Attribute {
  res: string; // Parameter identifier from the API response
  req?: string; // Parameter identifier from the API request
  value?: any; // The resource value,

  constructor(res, req?) {
    this.res = res;
    this.req = req;
  }
}
