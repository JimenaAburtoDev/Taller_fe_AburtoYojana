import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  marca = 'Bella Luna';
  menuAbierto = false;

  enlaces = [
    { texto: 'Inicio', href: '#inicio' },
    { texto: 'Servicios', href: '#servicios' },
    { texto: 'Nosotros', href: '#nosotros' },
    { texto: 'Contacto', href: '#contacto' }
  ];

  alternarMenu(): void {
    this.menuAbierto = !this.menuAbierto;
  }

  irASeccion(evento: Event, id: string): void {
    evento.preventDefault();
    this.menuAbierto = false;

    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}
