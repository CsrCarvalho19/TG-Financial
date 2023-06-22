import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'

import { ComponentsModule } from './components/components.module'
import { AppComponent } from './app.component'

const routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'cadastrar-usuario',
    loadChildren: () =>
      import('./pages/cadastrar-usuario/cadastrar-usuario.module').then(
        (m) => m.CadastrarUsuarioModule
      ),
  },
  {
    path: 'atualizar-usuario',
    loadChildren: () =>
      import('./pages/atualizar-usuario/atualizar-usuario.module').then(
        (m) => m.AtualizarUsuarioModule
      ),
  },
  {
    path: 'pagina-inicial',
    loadChildren: () =>
      import('./pages/pagina-inicial/pagina-inicial.module').then(
        (m) => m.PaginaInicialModule
      ),
  },
  {
    path: 'lancamento-de-gastos',
    loadChildren: () =>
      import('./pages/lancamento-de-gastos/lancamento-de-gastos.module').then(
        (m) => m.LancamentoDeGastosModule
      ),
  },
  {
    path: 'lancamento-de-recebimentos',
    loadChildren: () =>
      import(
        './pages/lancamento-de-recebimentos/lancamento-de-recebimentos.module'
      ).then((m) => m.LancamentoDeRecebimentosModule),
  },
  {
    path: 'consultar-lancamentos',
    loadChildren: () =>
      import('./pages/consultar-lancamentos/consultar-lancamentos.module').then(
        (m) => m.ConsultarLancamentosModule
      ),
  },
]

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), ComponentsModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
