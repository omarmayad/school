import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContinueComponent } from './components/continue/continue.component';
import { IndexComponent } from './components/index/index.component';
import { QuestionsComponent } from './components/questions/questions.component';

const appRoutes: Routes = [
  { path: 'continue', component: ContinueComponent },
  { path: 'questions', component: QuestionsComponent },
  { path: '**', component: IndexComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ContinueComponent,
    IndexComponent,
    QuestionsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
