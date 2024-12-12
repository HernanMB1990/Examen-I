import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  nombre: string = '';
  edad: number | null = null;
  resultado: string = '';

  verificarEdad() {
    if (this.edad === null || this.nombre.trim() === '') {
      this.resultado = 'Por favor, ingrese todos los datos.';
    } else if (this.edad < 18) {
      this.resultado = `${this.nombre}, eres menor de edad.`;
    } else {
      this.resultado = `${this.nombre}, eres mayor de edad.`;
    }
  }
}

