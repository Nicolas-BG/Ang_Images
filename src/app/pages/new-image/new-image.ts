import { Component } from '@angular/core';
import { Header } from '../../component/header/header';
import { Footer } from '../../component/footer/footer'
import { ImageForm } from '../../component/image-form/image-form';

import { ImageData } from '../../interfaces/Image'

import { ImageService } from '../../services/image';

@Component({
  selector: 'app-new-image',
  imports: [ Header, Footer, ImageForm],
  templateUrl: './new-image.html',
  styleUrl: './new-image.css',
})
export class NewImage {
  constructor(private imageService: ImageService) {};

  createHandler(image: ImageData){
    console.log('deu boa');

    const formData = new FormData()

    formData.append("title", image.title);
    formData.append("description", image.description);
    
    if (image.image) {
      formData.append("image", image.image);
    }

    this.imageService.createImage(formData).subscribe();
    
    console.log('deu boa pra caralho');
  }

}
