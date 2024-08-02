import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

type Movie = {
  uuid: string,
  thumbnail: string
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ RouterLink, CommonModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class HomeComponent implements OnInit{

  movies: Movie[] = [
    { uuid: '1', thumbnail: 'https://ingresso-a.akamaihd.net/prd/img/movie/meu-malvado-favorito-4/4d756249-3b88-4b59-baa2-527f5e3d4c3e.webp'},
    { uuid: '2', thumbnail: 'https://ingresso-a.akamaihd.net/prd/img/movie/deadpool-e-wolverine/09f1e988-47fe-4d5e-88ec-a51051d3241f.webp'},
    { uuid: '3', thumbnail: 'https://ingresso-a.akamaihd.net/prd/img/movie/divertida-mente-2/61ac248d-e3e6-4e33-9515-8ce0621a32fa.webp'},
    { uuid: '1', thumbnail: 'https://ingresso-a.akamaihd.net/prd/img/movie/meu-malvado-favorito-4/4d756249-3b88-4b59-baa2-527f5e3d4c3e.webp'},
    { uuid: '2', thumbnail: 'https://ingresso-a.akamaihd.net/prd/img/movie/deadpool-e-wolverine/09f1e988-47fe-4d5e-88ec-a51051d3241f.webp'},
    { uuid: '3', thumbnail: 'https://ingresso-a.akamaihd.net/prd/img/movie/divertida-mente-2/61ac248d-e3e6-4e33-9515-8ce0621a32fa.webp'},
  ]

  ngOnInit(): void {
    setTimeout(() => {
      const swipperContainer: any = document.getElementById('swiper-container')
      swipperContainer.style.width = "100%"
    }, 100)
  }
}
