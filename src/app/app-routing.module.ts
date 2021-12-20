import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'add-new-task',
    loadChildren: () => import('src/app/pages/add-new-task/add-new-task.module').then( m => m.AddNewTaskPageModule)
  },
  {
    path: 'update-task',
    loadChildren: () => import('src/app/pages/update-task/update-task.module').then( m => m.UpdateTaskPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./index/index.module').then(m => m.IndexPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'walk',
    loadChildren: () => import('./pages/actpages/walk/walk.module').then(m => m.WalkPageModule)
  },
  {
    path: 'exercise',
    loadChildren: () => import('./pages/actpages/exercise/exercise.module').then(m => m.ExercisePageModule)
  },
  {
    path: 'book',
    loadChildren: () => import('./pages/actpages/book/book.module').then(m => m.BookPageModule)
  },
  {
    path: 'water',
    loadChildren: () => import('./pages/actpages/water/water.module').then(m => m.WaterPageModule)
  },
  {
    path: 'music',
    loadChildren: () => import('./pages/actpages/music/music.module').then(m => m.MusicPageModule)
  },
  {
    path: 'paint',
    loadChildren: () => import('./pages/actpages/paint/paint.module').then(m => m.PaintPageModule)
  },
  {
    path: 'bath',
    loadChildren: () => import('./pages/actpages/bath/bath.module').then(m => m.BathPageModule)
  },
  {
    path: 'sleep',
    loadChildren: () => import('./pages/actpages/sleep/sleep.module').then(m => m.SleepPageModule)
  },
  {
    path: 'instrument',
    loadChildren: () => import('./pages/actpages/instrument/instrument.module').then(m => m.InstrumentPageModule)
  },
  {
    path: 'meditate',
    loadChildren: () => import('./pages/actpages/meditate/meditate.module').then(m => m.MeditatePageModule)
  },
  {
    path: 'sunset',
    loadChildren: () => import('./pages/actpages/sunset/sunset.module').then(m => m.SunsetPageModule)
  },
  {
    path: 'talk',
    loadChildren: () => import('./pages/actpages/talk/talk.module').then(m => m.TalkPageModule)
  },
  {
    path: 'pray',
    loadChildren: () => import('./pages/actpages/pray/pray.module').then(m => m.PrayPageModule)
  },
  {
    path: 'coffee',
    loadChildren: () => import('./pages/actpages/coffee/coffee.module').then(m => m.CoffeePageModule)
  },
  {
    path: 'food',
    loadChildren: () => import('./pages/actpages/food/food.module').then(m => m.FoodPageModule)
  },
  {
    path: 'pet',
    loadChildren: () => import('./pages/actpages/pet/pet.module').then(m => m.PetPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
