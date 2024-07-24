import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  slides = [
    { image: '../../../assets/Images/bghome03.jpg', caption: '"Elevate Your Style, Rent the Best!"' },
    { image: '../../../assets/Images/homebg6.jpg', caption: '"Look Fabulous, Spend Less!"' },
    { image: '../../../assets/Images/bghome04.jpg', caption: '"Fashion Freedom at Your Fingertips."' },
    { image: '../../../assets/Images/bghome1.jpg', caption: '"Borrow the Best, Be the Best."' },
  ];
  currentSlide = 0;
  slideInterval: any;

  constructor(private route: Router) {}

  ngOnInit(): void {
    this.showSlides();
  }

  showSlides() {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 4000); // Change image every 5 seconds
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  previousSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  gotoLogin(): void {
    this.route.navigate(['/user-login']);
  }

  ngOnDestroy(): void {
    clearInterval(this.slideInterval);
  }
}