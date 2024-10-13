import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  images = [
    { src: 'lib1.png', alt: 'Library Image 1' },
    { src: 'lib2.png', alt: 'Library Image 2' },
    { src: 'lib3.png', alt: 'Library Image 3' },
    { src: 'lib4.png', alt: 'Library Image 4' },
    { src: 'lib5.png', alt: 'Library Image 5' }
    // Add more image objects as needed
  ];
}
