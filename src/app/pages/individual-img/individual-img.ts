import { Component, signal } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormGroupDirective } from '@angular/forms';

import { Header } from '../../component/header/header';
import { Footer } from '../../component/footer/footer'

import { ImageService } from '../../services/image';
import { MessagesService } from '../../services/messages';
import { CommentService } from '../../services/comment';

import { ImageData } from '../../interfaces/Image'
import { CommentData } from '../../interfaces/Comment'

import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { environment } from '../../../environments/environment.development';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-individual-img',
  imports: [Header, Footer, FontAwesomeModule, RouterLink, ReactiveFormsModule],
  templateUrl: './individual-img.html',
  styleUrl: './individual-img.css',
})
export class IndividualImg {
  imagem = signal<ImageData>({} as ImageData);
  baseUrl: string = environment.baseApiUrl;

  FaTimes = faTimes;
  FaEdit = faEdit;

  commentForm!: FormGroup;

  constructor
  (
    private imageService: ImageService,
    private route: ActivatedRoute,
    private messagesService: MessagesService,
    private router: Router,
    private commentService: CommentService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.imageService.getImageById(id).subscribe((response) => {
      this.imagem.set(response.data);
    });
    //console.log(this.imagem()); 

    this.commentForm = new FormGroup({
      text: new FormControl("", [Validators.required]),
      username: new FormControl("", [Validators.required])
    });
  }

  //gets dos comentários

  get text(){
    return this.commentForm.get('text')!;
  }
  get username(){
    return this.commentForm.get('username')!;
  }

  //

  async com_submit(formDirective: FormGroupDirective){
    if(this.commentForm.invalid){
      return;
    }

    const data: CommentData = this.commentForm.value;

    data.momentId = Number(this.imagem()!.id);

    await this.commentService.createComment(data, data.momentId).subscribe({
    next: (comment) => {
      console.log("Comentário criado com sucesso!");

      this.imagem()!.comments!.push(comment.data);

      this.messagesService.add("Comentário criado com sucesso!");

      this.commentForm.reset();

      formDirective.resetForm();
    },

    error: (error) => {
      console.error("Erro ao criar comentário:", error);

      this.messagesService.add("Erro ao criar comentário!");
    }
  });

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
