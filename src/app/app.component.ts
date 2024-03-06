import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  ngOnInit() {
    throw new Error('Method not implemented.');
  }
  title = 'driving-school';
  private setupIntersectionObserver() {
    const faders = document.querySelectorAll('.fade-in');
    const flippedContainer = document.querySelectorAll('.flip-container');
    const appearOptions = {
      threshold: 0.5,
      rootMargin: "0px 0px -100px 0px" // make it appear once the image is 100px in from the bottom of the page
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {  // appearOnScroll is the observer
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
          appearOnScroll.unobserve(entry.target); // stop looking at it once the class has been added
        }
      });
    }, appearOptions);

    faders.forEach(fader => {
      appearOnScroll.observe(fader); // waits until I assign a target to our observer
    });
    flippedContainer.forEach(flip => {
      appearOnScroll.observe(flip);
    });
  }
}
