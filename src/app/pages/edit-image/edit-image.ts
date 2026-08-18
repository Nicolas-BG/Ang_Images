import { Component, signal } from '@angular/core';
import { Header } from '../../component/header/header';
import { Footer } from '../../component/footer/footer'
import { ImageForm } from '../../component/image-form/image-form';

import { ImageData } from '../../interfaces/Image'

import { ImageService } from '../../services/image';
import { MessagesService } from '../../services/messages';

import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { environment } from '../../../environments/environment.development';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
//import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-edit-image',
  imports: [Header, Footer, ImageForm, FontAwesomeModule, RouterLink],
  templateUrl: './edit-image.html',
  styleUrl: './edit-image.css',
})
export class EditImage {
  imagem = signal<ImageData>({} as ImageData);
  baseUrl: string = environment.baseApiUrl;

  constructor
  (
    private imageService: ImageService,
    private route: ActivatedRoute,
    private messagesService: MessagesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.imageService.getImageById(id).subscribe((response) => {
      this.imagem.set(response.data);
    });
    //console.log(this.imagem()); 
  }

  async editHandler(ImgData: ImageData){
    const id = this.imagem().id;

    const formData = new FormData()

    formData.append('title', ImgData.title);
    formData.append('description', ImgData.description);

    await this.imageService.updateImageById(id!, formData).subscribe({
      next: (response) => {
        console.log("Imagem editada com sucesso!");

        this.messagesService.add(`A imagem foi editada com sucesso!`);
        this.router.navigate(['/home']);
      },

      error: (error) => {
        console.error("Erro ao editar a imagem:", error);

        this.messagesService.add(`Erro ao editar a imagem!`);
      }
    });
  }
}
