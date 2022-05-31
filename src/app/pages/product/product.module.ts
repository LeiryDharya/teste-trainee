import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilterComponent } from './filter/filter.component';
import { ListComponent } from './list/list.component';
import { CardModule } from 'primeng/card';
import { ButtonModule} from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { DividerModule } from 'primeng/divider';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { PaginatorModule } from 'primeng/paginator';
import {CascadeSelectModule} from 'primeng/cascadeselect';



@NgModule({
  declarations: [
    FilterComponent,
    ListComponent,
  ],
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    FormsModule,
    DropdownModule,
    DividerModule,
    TableModule,
    TagModule,
    PaginatorModule,
    CascadeSelectModule 
  ],  
  exports: [
    FilterComponent,
    ListComponent,
  ],
})

export class ProductModule { }
