import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { LancamentoDeRecebimentos } from './lancamento-de-recebimentos.component'

const routes = [
  {
    path: '',
    component: LancamentoDeRecebimentos,
  },
]

@NgModule({
  declarations: [LancamentoDeRecebimentos],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [LancamentoDeRecebimentos],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LancamentoDeRecebimentosModule {}
