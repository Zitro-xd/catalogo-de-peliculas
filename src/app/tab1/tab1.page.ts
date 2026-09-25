import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pelicula } from '../models/pelicula.model';
import { PeliculaService } from '../services/pelicula.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  peliculas: Pelicula[] = [];

  constructor(
    private peliculaService: PeliculaService,
    private router: Router
  ) {}

  ngOnInit() {
    this.peliculas = this.peliculaService.obtenerPeliculas();
  }

  verDetalle(id: number) {
    this.router.navigate(['/detalle', id]);
  }
}