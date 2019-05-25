import { Component, OnInit, Inject, AfterViewInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { NavService } from '../../service/nav-service/nav.service';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.scss']
})
export class LeftNavComponent implements OnInit, AfterViewInit {
  public sidebarCollapse: any;
  public sidebar: any;
  public navData: any;

  constructor(@Inject(DOCUMENT) document, public navService: NavService) {
  }


  ngOnInit() {
    this.navService.navTree.subscribe((data: any) => {
      this.navData = data;
    });
  }
  ngAfterViewInit() {
    this.sidebarCollapse = document.getElementById('sidebarCollapse');
    this.sidebar = document.getElementById('sidebar');
    this.sidebarCollapse.addEventListener('click', (e: Event, test: string = 'demo') => {
      this.slideLeftNav(e, test);
    });
  }
  slideLeftNav(e: Event, test: string) {
    e.preventDefault();
    e.stopPropagation();
    const sidebarElement = (<HTMLInputElement>this.sidebar);
    if (sidebarElement.classList.contains('active')) {
      sidebarElement.classList.remove('active');
    } else {
      sidebarElement.classList.add('active');
      this.closeAllLevels();
    }
  }

  showContent(level: any) {
    if (!level.isOpen) {
      this.closeAllLevels();
    }
    level.isOpen = !level.isOpen;
  }
  closeAllLevels() {
    this.navData.forEach((level) => {
      level.isOpen = false;
    });
  }
}
