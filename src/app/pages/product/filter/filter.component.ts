import { Component, OnInit } from '@angular/core';

//interpolação de dados//

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})

export class FilterComponent implements OnInit {
  name: string = 'familia';

  datas: any [] = [];

  constructor() { }

  ngOnInit(): void {
    this.getDatas();
  }

  getDatas () {
    this.datas = [
      {
        id: 1,
        status: "ATIVO"
      },
      {
        id: 2,
        status: "INATIVO"
      },
      {
        id: 3,
        status: "PENDENTE"
      }
    ]  
  }
}

