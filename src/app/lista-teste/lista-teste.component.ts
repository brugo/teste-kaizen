import { Component, OnInit } from "@angular/core";
import { Teste } from "../shared/models/teste";
import { Restangular } from "ngx-restangular";

@Component({
  selector: 'app-lista-teste',
  templateUrl: './lista-teste.component.html',
  styleUrls: ['./lista-teste.component.scss']
})
export class ListaTesteComponent implements OnInit {
  title = "teste-aplicacao";
  testes: Array<Teste>;

  lista = 
  [
    {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    }
  ];

  constructor(private restangular: Restangular) {}

  ngOnInit() {
    Teste.list(this.restangular).subscribe(response => {
      console.log(response);
      this.testes = Teste.mapManyToModel(this.restangular, response);
    });
  }

}
