import { Component, OnInit, signal, } from '@angular/core';
import { Header } from '../../component/header/header';
import { Footer } from '../../component/footer/footer'

import { ImageService } from '../../services/image';

import { ImageData } from '../../interfaces/Image'

import { environment } from '../../../environments/environment';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { RouterLink } from "@angular/router";

@Component({
  selector: 'page-home',
  imports: [Header, Footer, RouterLink, FontAwesomeModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  allImages = signal<ImageData[]>([]);
  Images = signal<ImageData[]>([]);

  baseUrl: string = environment.baseApiUrl;

  

  

  constructor(private imageService: ImageService) {}

  ngOnInit(): void {
    this.imageService.getImages().subscribe((items) => {

      const data = items.data
        .map(item => ({
          ...item,
          created_at_formatted: new Date(
            item.created_at!.replace(' ', 'T')
          ).toLocaleDateString('pt-BR')
        }))
        .sort((a, b) => {
          const dateA = new Date(a.created_at!.replace(' ', 'T')).getTime();
          const dateB = new Date(b.created_at!.replace(' ', 'T')).getTime();

          return dateB - dateA;
        });

      console.log(items.data.map(item => item.created_at));

      this.allImages.set(data);
      this.Images.set(data);
    });
  }

  
}
