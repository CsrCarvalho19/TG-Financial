import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'atualizar-usuario',
  templateUrl: 'atualizar-usuario.component.html',
  styleUrls: ['atualizar-usuario.component.css'],
})
export class AtualizarUsuario {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('AtualizarUsuario - Ambitious Profitable Locust')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'AtualizarUsuario - Ambitious Profitable Locust',
      },
    ])
  }
}
