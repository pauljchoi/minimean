import { Routes, RouterModule } from '@angular/router';
import { StoreComponent } from './store/store.component';
import { DashboardComponent } from './store/dashboard/dashboard.component';
import { ProductsComponent } from './store/products/products.component';
import { CustomersComponent } from './store/customers/customers.component';
import { OrdersComponent } from './store/orders/orders.component';
import { SettingsComponent } from './store/settings/settings.component';


const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/store', pathMatch: 'full' },
    { path: 'store', component: DashboardComponent},
    { path: 'dashboard', component: DashboardComponent},
    { path: 'products', component: ProductsComponent},
        // children: [
        //     { path: 'public', component: HomePublicComponent },
        //     { path: 'private', component: HomePrivateComponent }
        // ] },
    { path: 'orders', component: OrdersComponent},
        // children: [
        //     { path: 'notes-public', component: NotesPublicComponent },
        //     { path: 'notes-private', component: NotesPrivateComponent }
        // ] },
    { path: 'customers', component: CustomersComponent },
    { path: 'settings', component: SettingsComponent },
];
export const routing = RouterModule.forRoot(APP_ROUTES);