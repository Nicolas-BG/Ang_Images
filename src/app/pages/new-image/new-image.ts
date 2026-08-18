import { Component } from '@angular/core';
import { Header } from '../../component/header/header';
import { Footer } from '../../component/footer/footer'
import { ImageForm } from '../../component/image-form/image-form';

import { ImageData } from '../../interfaces/Image'

import { ImageService } from '../../services/image';
import { MessagesService } from '../../services/messages';

import { Router } from '@angular/router';


@Component({
  selector: 'app-new-image',
  imports: [ Header, Footer, ImageForm],
  templateUrl: './new-image.html',
  styleUrl: './new-image.css',
})
export class NewImage {
  constructor(
    private imageService: ImageService, 
    private messagesService: MessagesService,
    private router: Router
  ) {};

  createHandler(image: ImageData){
    

    const formData = new FormData()

    formData.append("title", image.title);
    formData.append("description", image.description);
    
    if (image.image) {
      formData.append("image", image.image);
    }

    this.imageService.createImage(formData).subscribe();
    
    this.messagesService.add(`Imagem de nome "${image.title}" criada com sucesso!`);

    this.router.navigate(['/view']); //mudar pra view

  }

}
