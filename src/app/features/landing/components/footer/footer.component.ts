import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  marca = 'Bella Luna';
  anioActual = new Date().getFullYear();

  redes = [
    { nombre: 'Instagram', icono: '📷', href: '#' },
    { nombre: 'Facebook', icono: '📘', href: '#' },
    { nombre: 'TikTok', icono: '🎵', href: '#' }
  ];

  enlaces = [
    { texto: 'Inicio', href: '#inicio' },
    { texto: 'Servicios', href: '#servicios' },
    { texto: 'Nosotros', href: '#nosotros' },
    { texto: 'Contacto', href: '#contacto' }
  ];
}
