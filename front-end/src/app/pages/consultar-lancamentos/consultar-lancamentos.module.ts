import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { ConsultarLancamentos } from './consultar-lancamentos.component'

const routes = [
  {
    path: '',
    component: ConsultarLancamentos,
  },
]

@NgModule({
  declarations: [ConsultarLancamentos],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [ConsultarLancamentos],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ConsultarLancamentosModule {}
