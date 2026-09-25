import { Component } from '@angular/core';

interface Servicio {
  icono: string;
  nombre: string;
  descripcion: string;
  precio: string;
}

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {
  servicios: Servicio[] = [
    { icono: '💇‍♀️', nombre: 'Corte y Peinado', descripcion: 'Corte personalizado según tu tipo de rostro y peinado profesional.', precio: 'S/ 45' },
    { icono: '💅', nombre: 'Manicure y Pedicure', descripcion: 'Cuidado completo de uñas con esmaltado tradicional o semipermanente.', precio: 'S/ 35' },
    { icono: '🧖‍♀️', nombre: 'Tratamiento Facial', descripcion: 'Limpieza profunda, hidratación y masaje facial relajante.', precio: 'S/ 60' },
    { icono: '💄', nombre: 'Maquillaje Profesional', descripcion: 'Maquillaje para eventos, sesiones de fotos o el día a día.', precio: 'S/ 70' },
    { icono: '🪒', nombre: 'Depilación', descripcion: 'Depilación con cera para rostro y cuerpo con productos suaves.', precio: 'S/ 40' },
    { icono: '💆‍♀️', nombre: 'Masajes Relajantes', descripcion: 'Sesión de masaje corporal para liberar tensión y estrés.', precio: 'S/ 80' }
  ];
}
