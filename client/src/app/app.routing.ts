import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent , children: [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', loadChildren: './landing-page/landing-page.module#LaningPageModule' },
    { path: 'new-game', loadChildren: './new-game/new-game.module#NewGameModule' },
    { path: 'game/:id', loadChildren: './game/game.module#GameModule' },
    { path: 'game/:id/setup', loadChildren: './game-setup/game-setup.module#GameSetupModule' },
  ]},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
