import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paint',
  templateUrl: './paint.page.html',
  styleUrls: ['./paint.page.scss'],
})
export class PaintPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  back() {
    this.router.navigate(['/home/activities'])
  }

}
