import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

import { ImageData } from '../../interfaces/Image'

@Component({
  selector: 'comp-image-form',
  imports: [ ReactiveFormsModule ],
  templateUrl: './image-form.html',
  styleUrl: './image-form.css',
})
export class ImageForm {
  //@Output() onSubmit = new EventEmitter<{ title: string }>();
  //@Output() onSubmit = new EventEmitter<ImageData | null>();
  //@Output() onSubmit: EventEmitter<ImageData> = new EventEmitter();
  @Output() onSubmit = new EventEmitter<ImageData>();
  //@Output() onSubmit = new EventEmitter<any>();
  @Input() TextValue!: string;
  
  //cuidar do formulario
  
  imageForm!: FormGroup;  

  ngOnInit():void{
    this.imageForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      image: new FormControl(''),
    });
  }

  get title(){
    return this.imageForm.get('title')!;
  }

  get description() {
    return this.imageForm.get('description')!; 
  }

  submit(){
    if(this.imageForm.invalid){
      return;
    }
    console.log("Enviou Formulário: ");
    console.log(this.imageForm.value);
    
    this.onSubmit.emit(this.imageForm.value);
  }

  

  //preview da imagem

  imagemPreview: string | null = null;

  selecionarImagem(event: any): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      const arquivo:File = input.files[0];

      //colocar a imagem na tela
      this.imagemPreview = URL.createObjectURL(arquivo);

      //colocar a imagem no form
      this.imageForm.patchValue({image: arquivo});

    }

    
  }
}
