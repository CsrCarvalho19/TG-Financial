import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'lancamento-de-recebimentos',
  templateUrl: 'lancamento-de-recebimentos.component.html',
  styleUrls: ['lancamento-de-recebimentos.component.css'],
})
export class LancamentoDeRecebimentos {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle(
      'LancamentoDeRecebimentos - Ambitious Profitable Locust'
    )
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'LancamentoDeRecebimentos - Ambitious Profitable Locust',
      },
    ])
  }
}
