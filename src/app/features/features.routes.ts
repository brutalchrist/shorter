import { Route } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home/home.component';

export const FeaturesRoutes: Route[] = [
    {
        path: '',
        component: IndexComponent,
        children: [
            {
                path: '',
                component: HomeComponent
            }
        ],
        canActivate: []
    },
    {
        path: '**',
        redirectTo: ''
    }
];
