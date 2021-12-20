import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.page.html',
  styleUrls: ['./activities.page.scss'],
})
export class ActivitiesPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  walk() {
    this.router.navigate(['/walk'])
  }

  exercise() {
    this.router.navigate(['/exercise'])
  }

  water() {
    this.router.navigate(['/water'])
  }

  book() {
    this.router.navigate(['/book'])
  }

  paint() {
    this.router.navigate(['/paint'])
  }

  music() {
    this.router.navigate(['/music'])
  }

  sleep() {
    this.router.navigate(['/sleep'])
  }

  bath() {
    this.router.navigate(['/bath'])
  }

  instrument() {
    this.router.navigate(['/instrument'])
  }

  meditate() {
    this.router.navigate(['/meditate'])
  }

  sunset() {
    this.router.navigate(['/sunset'])
  }

  talk() {
    this.router.navigate(['/talk'])
  }

  pray() {
    this.router.navigate(['/pray'])
  }

  food() {
    this.router.navigate(['/food'])
  }

  pet() {
    this.router.navigate(['/pet'])
  }

  coffee() {
    this.router.navigate(['/coffee'])
  }

}
