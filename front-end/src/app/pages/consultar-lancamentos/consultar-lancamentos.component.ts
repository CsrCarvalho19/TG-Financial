import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'consultar-lancamentos',
  templateUrl: 'consultar-lancamentos.component.html',
  styleUrls: ['consultar-lancamentos.component.css'],
})
export class ConsultarLancamentos {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('ConsultarLancamentos - Ambitious Profitable Locust')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'ConsultarLancamentos - Ambitious Profitable Locust',
      },
    ])
  }
}
