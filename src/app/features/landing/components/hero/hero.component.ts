import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  etiqueta = 'Bienestar & Belleza';
  titulo = 'Realza tu belleza natural';
  descripcion = 'En Bella Luna combinamos técnica, productos premium y un ambiente relajante para que salgas renovada por dentro y por fuera.';

  estadisticas = [
    { numero: '8+', texto: 'Años de experiencia' },
    { numero: '1200+', texto: 'Clientas felices' },
    { numero: '15', texto: 'Especialistas' }
  ];
}
