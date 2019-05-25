
Development Tools ---------------																								
Editor: Visual Studio code																									
UI Framework: Angular 6	(6.0.8)																								
API Endpoint: Firebase																									
Front End component library: Bootstrap 4																									
Angular cli Version (At the time of project start): 6.2.6    (Angular-cli 7.0.2 was available at the time of creating the project)																									
Git bash																									
																									
Installation steps---------------																								

1. Install the latest version of nodejs (Latest LTS Version: 8.12.0 (includes npm 6.4.1)) This version was the latest at the time of project creation

For Ubunto users
if you are using ubunto (assume Ubunto 18.04 LTS)
Then this OS comes with default nodejs installed in it, this default nodejs & npm version will be 
v8.10.0 (nodejs -v)
v3.5.2 (npm -v)
but Angular-cli 6 needs nodejs v8.9 or heigher & npm v5.5.1 or heigher, so we need to upgrade our nodejs to latest version --> Latest LTS Version: 8.12.0 (includes npm 6.4.1)
In order to upgrade, first we need to delete the current nodejs installation.

refer: https://askubuntu.com/questions/786015/how-to-remove-nodejs-from-ubuntu-16-04
   ""sudo apt-get purge nodejs""
it is only removing node related packages i.e. relevant packages, nothing more.
On the other hand, when you do:
   ""sudo apt-get purge --auto-remove nodejs""
it is necessarily doing:
   ""sudo apt-get purge nodejs""
   ""sudo apt-get autoremove""
The above procedure will remove nodejs & npm from your machine.

Now nodejs installation 
""sudo apt-get install nodejs"" (this will not install the latest one, instead it will install the older version)
so execute the below commands.
   ""sudo apt install curl""
   ""curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -""
   ""sudo apt-get install -y nodejs""
The above commands will install the latest version of nodejs.

Note: For this project we are using Angular-cli v6.2.6 (This got a Prerequisites)
          Both the CLI and generated project have dependencies that require Node 8.9 or higher, together with NPM 5.5.1 or higher.


																									
2. Install Angular cli globally (npm install -g @angular/cli)   This will install the Latest version of cli - 7.0.2
   But we are sticking to Angular-cli version 6 (v 6.2.6) so that we get better support for other addons like bootstrap & etc etc...

   To install specific version of Angular-cli use (npm install -g @angular/cli@6.2.6)
   If you already have other version of angular-cli installed in your machine then you need to first uninstall it & then install the specific Angular-cli version.
      npm uninstall -g @angular/cli
      npm cache clean  (or, if you're using npm > 5 then use ""npm cache verify"") After this  Reboot the machine.
      sudo npm install -g angular-cli@6.2.6

   (Note: dont install angular-cli locally)

   To check the installed angular-cli version use (ng --version)
   Angular Cli version history: https://www.npmjs.com/package/@angular/cli?activeTab=versions"																																															
																									
3. Creating a new project & running																									
"    ng new PROJECT-NAME --style=scss
    cd PROJECT-NAME
    ng serve"	
## --------------------------------------------------

# My google dev key - sharath.infonaut@gmail.com
AIzaSyA8xIgsmTKMzt50YCgchjFQnb1DAQdJlxA

# google dev key - sunil
AIzaSyDMBfG_KAED_HUd6eci5U6bGXORfaO0r7s

# Login Credentials
9880165946 / 9880165946


# --------------- Development changes ----------------------

1. This latest bootstrap version ("bootstrap": "^4.1.3") was replaced by "bootstrap": "^3.3.7" for the sake of implementing ecommerce template design provided by chandhan. 
The Ecommerce HTML/jquery Template design was using bootstrap v3.3.7, when we tried to integrate that design in our angular project which was using bootsrap v4.1.3 we found a lot of breading design changes.
In order to avoid the breaking changes we downgraded our bootstrap version to v3.3.7
** Future enhancement: Use bootstrap v4.1.3 / latest-version and resolve the breaking design changes **
(At the time of writing this document latest verson of bootstrap was v4.3.1)

2. Since we downgraded our bootstrap to v3.3.7 it is not sure weather our ngx-bootstrap v3.1.1 will work.
   Answer: 
      Yes our current version of ngx-bootstrap ("ngx-bootstrap": "^3.1.1") will work with bootstrap v3.3.7
      https://www.npmjs.com/package/ngx-bootstrap
      ngx-bootstrap only uses bootstrap.css, it dosen't need bootstrap.js file.
      (At the time of writing this document latest verson of ngx-bootstrap was v4.1.1)

3. We are temporarily using jquery in our development process, going further we need to replace all jquery dependencies with custom written javascript methods Or make use of ngx-bootstrap features.
It is not advised to use jquery with angular, coz both does dom manupulation.
** While installing jquery we also need to install typings for jquery **
(https://medium.com/@NetanelBasal/typescript-integrate-jquery-plugin-in-your-project-e28c6887d8dc)

4. How to use a javascript plugin with angular (using a swiper plugin written in javascript inside angular) ?
  Answer: 
    (Adding a javascript file in angular project & use it)

https://stackoverflow.com/questions/51097346/how-to-add-external-js-file-in-angular-6-library

https://stackoverflow.com/questions/39538464/how-to-include-custom-files-with-angular-cli-build
https://stackoverflow.com/questions/44817349/how-to-include-external-js-file-in-angular-4-and-call-function-from-angular-to-j

https://stackoverflow.com/questions/46451161/unable-to-initialise-swiper-in-angular2-using-npm
https://stackblitz.com/edit/angular-da1phu?file=app%2Fswiper.component.ts
https://stackoverflow.com/questions/49810045/swiper-not-working-in-angular-5
https://github.com/angular/angular-cli/wiki/stories-global-scripts

https://blog.angular-university.io/typescript-2-type-system-how-do-type-definitions-work-in-npm-when-to-use-types-and-why-what-are-compiler-opt-in-types/

------------------------------------------------------
How to add swiper to your angular project

https://stackoverflow.com/questions/46451161/unable-to-initialise-swiper-in-angular2-using-npm
https://stackblitz.com/edit/angular-da1phu?file=app%2Fswiper.component.ts
https://stackoverflow.com/questions/49810045/swiper-not-working-in-angular-5
https://github.com/angular/angular-cli/wiki/stories-global-scripts
https://www.npmjs.com/package/@types/swiper


5. What is the difference between importing a css file inside angulars root style.css file & importing inside angular.json file ?


6. Note: if we mention jquery & bootstrap js files inside angular.json then its enough, all bootstrap functionalities like dropdown etc etc... will work. (bootstrap dropdown feature will work even without importing jquery inside our component)

7. How to use jQuery in angular ?

import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  constructor() { }
  ngOnInit() {
    $(document).ready(function() {
      $('#querySelect').click(function() {
          const div = $('#querySelect');
          div.animate({left: '100px'}, 'slow');
          div.animate({fontSize: '5em'}, 'slow');
      });
    });
    ----- Also works without document.ready -----
    $('#querySelect').click(function() {
      const div = $('#querySelect');
      div.animate({left: '100px'}, 'slow');
      div.animate({fontSize: '5em'}, 'slow');
    });
  }
}

8. How to use jQuery plugin in angular ?

https://blog.lysender.com/2017/10/angular-4-x-integrate-a-jquery-plugin/

9. Bootstrap 4 dependencies

https://www.c-sharpcorner.com/article/how-to-install-jquery-popper-and-bootstrap-in-angular/

Bootstrap 4 has two dependencies: jQuery 1.9.1 and popper.js 1.12.3. When you install Bootstrap 4, you need to install these two dependencies.

Install popper.js: npm install popper.js@^1.12.3 --save
Install jQuery: npm install jquery@1.9.1 --save
Install Bootstrap: npm install bootstrap@4.0.0-beta.2 --save
For Bootstrap 4.1

npm install popper.js@^1.14.3 --save
npm install jquery@3.3.1 --save
npm install bootstrap@4.1.1 --save



## --------------------------------------------------
# Practice

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


