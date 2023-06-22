import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { CadastrarUsuario } from './cadastrar-usuario.component'

const routes = [
  {
    path: '',
    component: CadastrarUsuario,
  },
]

@NgModule({
  declarations: [CadastrarUsuario],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [CadastrarUsuario],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CadastrarUsuarioModule {}
