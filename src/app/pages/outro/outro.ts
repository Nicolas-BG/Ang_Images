import { Component } from '@angular/core';
import { Header } from '../../component/header/header';
import { Footer } from '../../component/footer/footer'

@Component({
  selector: 'page-outro',
  imports: [ Header, Footer ],
  templateUrl: './outro.html',
  styleUrl: './outro.css',
})
export class Outro {}
