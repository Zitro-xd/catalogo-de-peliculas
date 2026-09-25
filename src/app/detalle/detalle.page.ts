import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pelicula } from '../models/pelicula.model';
import { PeliculaService } from '../services/pelicula.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
  standalone: false
})
export class DetallePage implements OnInit {

  pelicula: Pelicula | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private peliculaService: PeliculaService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pelicula = this.peliculaService.obtenerPeliculaPorId(id);
  }

  volver() {
    this.router.navigate(['/tabs/tab1']);
  }
}