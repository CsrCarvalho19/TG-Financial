import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { AtualizarUsuario } from './atualizar-usuario.component'

const routes = [
  {
    path: '',
    component: AtualizarUsuario,
  },
]

@NgModule({
  declarations: [AtualizarUsuario],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [AtualizarUsuario],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AtualizarUsuarioModule {}
