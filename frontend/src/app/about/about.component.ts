import { Component, AfterViewInit } from '@angular/core';

declare var $: any; // To use jQuery

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements AfterViewInit {
  constructor() {}

  ngAfterViewInit(): void {
    // Ensure the DOM is ready before running jQuery/JS logic
    $(document).ready(function () {
      // Your custom JS logic here
      console.log('DOM is fully loaded');

      // Example of initializing a carousel or handling custom elements
      $('.instructor-active').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 2,
          },
          1000: {
            items: 4,
          },
        },
      });
    });
  }
}
