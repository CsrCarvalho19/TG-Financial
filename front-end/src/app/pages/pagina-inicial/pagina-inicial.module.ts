import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { PaginaInicial } from './pagina-inicial.component'

const routes = [
  {
    path: '',
    component: PaginaInicial,
  },
]

@NgModule({
  declarations: [PaginaInicial],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [PaginaInicial],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PaginaInicialModule {}
