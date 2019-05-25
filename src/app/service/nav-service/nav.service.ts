import { Injectable, OnInit } from '@angular/core';
import NavItems from './nav.data';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavService implements OnInit {
  public testString: any = 'Hi';
  public navItems = NavItems;
  // public storeId = new BehaviorSubject<string>('web-store');
  // public navId = new BehaviorSubject<string>('guest');
  // public storeId = new BehaviorSubject<string>('web-store');
  // public navId = new BehaviorSubject<string>('incharge');
  public userSession = new BehaviorSubject<object>({storeId: 'web-store', navId: 'general_user'});
  public navTree = new BehaviorSubject<any[]>([]);

  // public storeId = 'c-pannel';
  // public navId = 'super-user';
  constructor() {
    this.userSession.subscribe((data: any) => {
      return this.navData(data);    // optimise the code to return a observable of left menu data.
    });
  }
  ngOnInit() {
    // Note ngOnInit is not executed, means what ever we have written in the constructor, if we write here then it will not work.
    // This is a scenario & usecase why we need to define some things in the constructor rather than defining in ngOnInit
  }
  navData(userSessionData: object) {
    const storeId = userSessionData['storeId'];
    const navId = userSessionData['navId'];
    const storeObject = this.navItems.find(item => (item.storeId === storeId));
    const userObject = storeObject.accessType.find(item => (item.navId === navId));
    this.navTree.next(userObject ? userObject.navTree : []);
  }
}
