import { Routes } from '@angular/router';
import {
    EventsListComponent,
    EventDetailComponent,
    EventCreateComponent,
    EventRouterActivator,
    EventListResolver,
    CreateSessionComponent
} from './events/index'
import { Error404Component } from './error/404.component';
import { UserModule } from './user/user.module';

export const routes: Routes = [
{path :'events',component:EventsListComponent,resolve:{events:EventListResolver}},
{path :'',redirectTo:'/events',pathMatch :'full'},
{path :'events/new',component:EventCreateComponent, canDeactivate:['canDeactivateEvent']},
{path: 'events/sessions/new',component:CreateSessionComponent},
{path :'events/:id',component:EventDetailComponent, canActivate:[EventRouterActivator]},
{path :'404',component:Error404Component},
{path: 'user',loadChildren:'./user/user.module#UserModule'}
]