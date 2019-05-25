import { Component, OnInit, Input, ViewChild } from '@angular/core';
// import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  // @Input() modalData: [];
  // @ViewChild('childModal') childModal: NgbModal;
  // constructor(private modal: NgbModal, private httpClient: HttpClient) { }
  constructor() { }

  ngOnInit() {
  }

}
