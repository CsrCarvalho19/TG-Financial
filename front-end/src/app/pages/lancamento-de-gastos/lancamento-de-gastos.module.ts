import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { LancamentoDeGastos } from './lancamento-de-gastos.component'

const routes = [
  {
    path: '',
    component: LancamentoDeGastos,
  },
]

@NgModule({
  declarations: [LancamentoDeGastos],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [LancamentoDeGastos],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LancamentoDeGastosModule {}
