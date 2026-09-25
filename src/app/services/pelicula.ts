import { Injectable } from '@angular/core';
import { Pelicula } from '../models/pelicula.model';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  private peliculas: Pelicula[] = [
    {
      id: 1,
      titulo: 'Interestelar',
      genero: 'Ciencia ficción',
      anio: 2014,
      duracion: 169,
      director: 'Christopher Nolan',
      descripcion: 'Un grupo de astronautas viaja a través de un agujero de gusano en búsqueda de un nuevo hogar.',
      disponible: true
    },
    {
      id: 2,
      titulo: 'Matrix',
      genero: 'Ciencia ficción',
      anio: 1999,
      duracion: 136,
      director: 'Lana y Lilly Wachowski',
      descripcion: 'Un programador descubre una realidad diferente.',
      disponible: true
    },
    {
      id: 3,
      titulo: 'El Padrino',
      genero: 'Drama',
      anio: 1972,
      duracion: 175,
      director: 'Francis Ford Coppola',
      descripcion: 'La historia de una familia de la mafia italoamericana.',
      disponible: false
    }
  ];

  constructor() { }

  obtenerPeliculas(): Pelicula[] {
    return this.peliculas;
  }

  obtenerPeliculaPorId(id: number): Pelicula | undefined {
    return this.peliculas.find(p => p.id === id);
  }
}