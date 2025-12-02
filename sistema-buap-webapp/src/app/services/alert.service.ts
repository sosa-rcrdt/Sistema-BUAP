import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({ providedIn: 'root' })
export class AlertOverrideService {
  constructor(private snackBar: MatSnackBar) {
    // Sobrescribimos el alert nativo
    (window as any).alert = (message?: any) => {
      this.snackBar.open(String(message ?? ''), 'Aceptar', {
        duration: 4000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
        panelClass: ['buap-alert-snackbar']
      });
    };
  }
}
