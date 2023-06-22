import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'cadastrar-usuario',
  templateUrl: 'cadastrar-usuario.component.html',
  styleUrls: ['cadastrar-usuario.component.css'],
})
export class CadastrarUsuario {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('CadastrarUsuario - Ambitious Profitable Locust')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'CadastrarUsuario - Ambitious Profitable Locust',
      },
    ])
  }
}
