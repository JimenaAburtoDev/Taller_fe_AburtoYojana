import { Component } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css'
})
export class NosotrosComponent {
  titulo = 'Un espacio pensado para ti';
  descripcion = 'Bella Luna nació en 2016 con la idea de crear un salón donde la técnica profesional y el trato cálido van de la mano. Nuestro equipo se capacita constantemente para ofrecerte las últimas tendencias en belleza.';

  valores = [
    { icono: '🌿', titulo: 'Productos naturales', texto: 'Trabajamos con líneas profesionales libres de químicos agresivos.' },
    { icono: '👩‍🎓', titulo: 'Equipo certificado', texto: 'Estilistas y cosmetólogas con formación continua.' },
    { icono: '💖', titulo: 'Atención personalizada', texto: 'Cada servicio se adapta a lo que tu piel y cabello necesitan.' }
  ];
}
