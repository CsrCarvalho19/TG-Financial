import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'pagina-inicial',
  templateUrl: 'pagina-inicial.component.html',
  styleUrls: ['pagina-inicial.component.css'],
})
export class PaginaInicial {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('PaginaInicial - Ambitious Profitable Locust')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'PaginaInicial - Ambitious Profitable Locust',
      },
    ])
  }
}
