import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-registro-admin',
  templateUrl: './registro-admin.component.html',
  styleUrls: ['./registro-admin.component.scss']
})
export class RegistroAdminComponent {
  @Input() rol: string = "";
  @Input() datos_user: any = {};

}
