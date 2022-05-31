import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  name: string = 'familia';

  cols: Object[] = [];
  datas: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.getCols();
    this.getDatas();
  }

  getCols() {
    this.cols = [
      { title: "", icon: "" }, 
      { title: "ID", icon: "pi pi-sort-alt"  }, 
      { title: "Familias", icon: "pi pi-sort-alt"  },
      { title: "Descrição", icon: "pi pi-sort-alt"  },
      { title: "Status", icon: "pi pi-sort-alt"  },
      { title: "", icon: ""  }
    ]
  }

  getDatas() {
    this.datas = [
      {
        id: 1,
        familia: "Família-A",
        descricao: "Descrição da familia",
        status: "ATIVO",
        search: "search",
        edit: "edit"
      },
      {
        id: 2,
        familia: "Família-B",
        descricao: "Descrição da familia",
        status: "ATIVO",
        search: "search",
        edit: "edit"
      },
      {
        id: 3,
        familia: "Família-C",
        descricao: "Descrição da familia",
        status: "ATIVO",
        search: "search",
        edit: "edit"
      },
      {
        id: 4,
        familia: "Família-D",
        descricao: "Descrição da familia",
        status: "ATIVO",
        search: "search",
        edit: "edit"
      },
      {
        id: 5,
        familia: "Família-E",
        descricao: "Descrição da familia",
        status: "ATIVO",
        search: "search",
        edit: "edit"
      },
      {
        id: 6,
        familia: "Família-F",
        descricao: "Descrição da familia",
        status: "ATIVO", 
      },
      {
        id: 7,
        familia: "Família-F",
        descricao: "Descrição da familia",
        status: "ATIVO", 
      },
      {
        id: 8,
        familia: "Família-F",
        descricao: "Descrição da familia",
        status: "ATIVO", 
      },
      {
        id: 9,
        familia: "Família-F",
        descricao: "Descrição da familia",
        status: "ATIVO", 
      }
    ]
  }
}
