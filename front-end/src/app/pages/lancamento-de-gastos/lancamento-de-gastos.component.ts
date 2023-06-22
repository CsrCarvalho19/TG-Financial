import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'lancamento-de-gastos',
  templateUrl: 'lancamento-de-gastos.component.html',
  styleUrls: ['lancamento-de-gastos.component.css'],
})
export class LancamentoDeGastos {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('LancamentoDeGastos - Ambitious Profitable Locust')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'LancamentoDeGastos - Ambitious Profitable Locust',
      },
    ])
  }
}
