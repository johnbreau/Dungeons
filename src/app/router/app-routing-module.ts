import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
const routes: Routes = [
  {
    path: '',
    component: AppComponent
  }, {
    path: '**',
    component: AppComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { CharacterSheetComponent } from '../components/character-sheet/character-sheet.component';
// import { CampaignComponent } from '../components/campaign/campaign.component';
// import { AppComponent } from '../app.component';
// import { HomeComponent } from '../components/home/home.component';
// import { MapBuilderComponent } from '../components/map-builder/map-builder.component';


// const routes: Routes = [
//   {path: 'home' , component: HomeComponent},
//   {path: 'character' , component: CharacterSheetComponent},
//   {path: 'campaign' , component: CampaignComponent},
//   {path: 'map' , component: MapBuilderComponent},
// ];

// @NgModule({
//   imports: [
//     RouterModule.forRoot(routes, {
//       initialNavigation: 'enabled',
//       scrollPositionRestoration: 'enabled',
//       anchorScrolling: 'enabled'
//     })
//   ],
//   exports: [
//     RouterModule
//   ]
// })

// export class AppRoutingModule {
// }
