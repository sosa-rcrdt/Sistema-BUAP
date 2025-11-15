import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { RegistroUsuariosScreenComponent } from './screens/registro-usuarios-screen/registro-usuarios-screen.component';

const routes: Routes = [
	// Pantalla principal del login: ''
	{ path: '', component: LoginScreenComponent, pathMatch: 'full' },
	// Pantalla de registro
	{ path: 'registro-usuarios', component: RegistroUsuariosScreenComponent, pathMatch: 'full' },
	// El 'pathMatch: full' indica que la URL debe coincidir por completo.
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
