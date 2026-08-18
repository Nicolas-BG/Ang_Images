import { Component, signal } from '@angular/core';
import { Header } from '../../component/header/header';
import { Footer } from '../../component/footer/footer'

import { ImageService } from '../../services/image';
import { MessagesService } from '../../services/messages';

import { ImageData } from '../../interfaces/Image'

import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { environment } from '../../../environments/environment.development';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-individual-img',
  imports: [Header, Footer, FontAwesomeModule, RouterLink],
  templateUrl: './individual-img.html',
  styleUrl: './individual-img.css',
})
export class IndividualImg {
  imagem = signal<ImageData>({} as ImageData);
  baseUrl: string = environment.baseApiUrl;

  FaTimes = faTimes;
  FaEdit = faEdit;

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

  deleteImagem(id:number) {
    
    const confirmado = window.confirm("Você tem certeza que quer deletar essa imagem?");
    if (confirmado) {
      console.log("A imagem de id número "+id+" será deletada");
      
      this.imageService.removeImageById(id).subscribe({
      next: (response) => {
        console.log("Imagem deletada com sucesso!");

        this.messagesService.add(`A imagem foi deletada com sucesso!`);
        this.router.navigate(['/home']);
      },

      error: (error) => {
        console.error("Erro ao deletar a imagem:", error);

        this.messagesService.add(`Erro ao deletar a imagem!`);
      }
    });
    }
  }
}
