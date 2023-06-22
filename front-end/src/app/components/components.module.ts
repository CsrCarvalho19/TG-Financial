import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { Headbar } from './headbar/headbar.component'

@NgModule({
  declarations: [Headbar],
  imports: [CommonModule, RouterModule],
  exports: [Headbar],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
