import { Component, Input } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Messages } from '../../component/messages/messages';

@Component({
  selector: 'comp-header',
  imports: [RouterLink, Messages],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  
  @Input() Escolha!:number;

  
  
}
