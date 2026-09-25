import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  nombre = '';
  correo = '';
  mensaje = '';
  enviado = false;

  datos = [
    { icono: '📍', texto: 'Av. Las Orquídeas 245, Miraflores, Lima' },
    { icono: '📞', texto: '+51 987 654 321' },
    { icono: '🕒', texto: 'Lun a Sáb: 9:00 am – 8:00 pm' }
  ];

  enviarFormulario(): void {
    if (!this.nombre || !this.correo || !this.mensaje) {
      return;
    }
    this.enviado = true;
    this.nombre = '';
    this.correo = '';
    this.mensaje = '';
  }
}
