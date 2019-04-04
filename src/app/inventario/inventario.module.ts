import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventarioService } from './inventario.service';
import { InventarioListarComponent } from './inventario-listar/inventario-listar.component';
import { InventarioDetailComponent } from './inventario-detail/inventario-detail.component';



@NgModule({
  imports: [
    CommonModule
  ],


  declarations: [InventarioListarComponent, InventarioDetailComponent],
  exports: [InventarioListarComponent,InventarioDetailComponent],
  providers: [InventarioService]
})
export class InventarioModule { }