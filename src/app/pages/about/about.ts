import { Component } from '@angular/core';
import { Header } from '../../component/header/header';
import { Footer } from '../../component/footer/footer'
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-about',
  imports: [Header, Footer, RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {}
