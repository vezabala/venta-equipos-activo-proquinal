import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'usuario',
        loadChildren: () => import('./usuario/usuario.module').then(m => m.ProquiEquiposVentaUsuarioModule)
      },
      {
        path: 'equipo',
        loadChildren: () => import('./equipo/equipo.module').then(m => m.ProquiEquiposVentaEquipoModule)
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ]
})
export class ProquiEquiposVentaEntityModule {}
