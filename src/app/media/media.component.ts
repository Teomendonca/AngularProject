import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrl: './media.component.css'
})
export class MediaComponent {
  media?: number;
  ac1: number = 0;
  ac2: number = 0;
  ag: number = 0;
  af: number = 0;

  calcularMedia() {
    this.media = this.ac1 * 0.15 + this.ac2 * 0.30 + this.ag * 0.10 + this.af * 0.45;
  }
  clean() {
    this.ac1 = 0;
    this.ac2 = 0;
    this.ag = 0;
    this.af = 0;
  }

}
