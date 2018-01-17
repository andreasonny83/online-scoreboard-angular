import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameSetupComponent } from './game-setup.component';

const routes: Routes = [
  { path: '', component: GameSetupComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameSetupRoutingModule { }
