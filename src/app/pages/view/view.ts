import { Component, OnInit, signal, ElementRef, ViewChild } from '@angular/core';
import { Header } from '../../component/header/header';
import { Footer } from '../../component/footer/footer'

import { ImageService } from '../../services/image';

import { ImageData } from '../../interfaces/Image'

import { environment } from '../../../environments/environment';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-view',
  imports: [Header, Footer, RouterLink, FontAwesomeModule],
  templateUrl: './view.html',
  styleUrl: './view.css',
})
export class View implements OnInit {

  allImages = signal<ImageData[]>([]);
  Images = signal<ImageData[]>([]);

  baseUrl: string = environment.baseApiUrl;

  faSearch = faSearch;
  searchTerm: string = '';

  @ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;

  constructor(private imageService: ImageService) {}

  ngOnInit(): void {
    this.imageService.getImages().subscribe((items) => {

      const data = items.data;

      data.forEach(item => {
        item.created_at = new Date(item.created_at!).toLocaleDateString('pt-BR');
      });

      this.allImages.set(data);
      this.Images.set(data);
      //console.log(this.allImages());
    });
  }

  search(texto: String): void {
    console.log(texto);

    const searchTerm = texto.toLowerCase();
    
    const filteredImages = this.allImages().filter((image) => {
      return (
        image.title.toLowerCase().includes(searchTerm) ||
        image.description.toLowerCase().includes(searchTerm)
      );
    });
    this.Images.set(filteredImages);
    console.log(this.Images());
  }

  back(): void {
    this.Images.set(this.allImages());
    this.searchInput.nativeElement.value = '';
  }
}
