import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sunset',
  templateUrl: './sunset.page.html',
  styleUrls: ['./sunset.page.scss'],
})
export class SunsetPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  back() {
    this.router.navigate(['/home/activities'])
  }

}
