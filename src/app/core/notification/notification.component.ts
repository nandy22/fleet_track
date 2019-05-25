import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  public status: object = { queryParams: null, fragment: '' };
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // console.log(this.activatedRoute.snapshot.queryParams);
    // console.log(this.activatedRoute.snapshot.fragment);

    this.activatedRoute.queryParams.subscribe((queryParams: any) => {
      console.log(queryParams);
    });
    this.activatedRoute.fragment.subscribe((fragment: any) => {
      console.log(fragment);
    });
  }

}
