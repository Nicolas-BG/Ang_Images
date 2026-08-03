import { Component } from '@angular/core';
import { Header } from '../../component/header/header';
import { Footer } from '../../component/footer/footer'

@Component({
  selector: 'app-view',
  imports: [Header, Footer],
  templateUrl: './view.html',
  styleUrl: './view.css',
})
export class View {}
