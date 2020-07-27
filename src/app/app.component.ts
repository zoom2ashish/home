import { Component } from '@angular/core';

interface Card {
  title: string;
  subtitle: string;
  description: string;
  tehnologies?: string;
  demoUrl?: string;
  githubRepoUrl?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public cards: Card[] = [
    {
      title: 'My Burger Builder',
      subtitle: 'Burger build app developed with Reactjs',
      description: 'React Learning project. Demonstrates React, Redux, Routing, Forms, Axios integration',
      tehnologies: 'React 16.x, Redux, Routing, Webpack, Google Firebase',
      demoUrl: 'https://zoom2ashish.github.io/my-burger-builder/',
      githubRepoUrl: 'https://github.com/zoom2ashish/my-burger-builder'
    },
    {
      title: 'Angular + Firebase',
      subtitle: 'Google Signin with firebase',
      description: 'Experiment to support Social Signin using Google Firebase in Angular App.',
      tehnologies: 'Angular 5, Google Firebase',
      demoUrl: 'https://zoom2ashish.github.io/ng5-firebase/',
      githubRepoUrl: 'https://github.com/zoom2ashish/ng5-firebase'
    },
    {
      title: 'Ports Input Control',
      subtitle: 'Uses Custom Form Control',
      description: 'Demonstrates Custom Form Control using ControlValueAccessor and Validators',
      tehnologies: 'Angular 5, Reactive Forms, ControlValueAccessor',
      demoUrl: 'https://zoom2ashish.github.io/ngx-ports-input-control/',
      githubRepoUrl: 'https://github.com/zoom2ashish/ngx-ports-input-control'
    },
    {
      title: 'Sample Tree View using Angular7 + D3',
      subtitle: 'Uses D3js and Angular 7',
      description: 'Demonstrates collapsible tree view using D3js',
      tehnologies: 'Angular 7, D3',
      demoUrl: 'https://zoom2ashish.github.io/ng-d3-hierarchy/',
      githubRepoUrl: 'https://github.com/zoom2ashish/ng-d3-hierarchy'
    },
    {
      title: 'vChat Client+Server',
      subtitle: 'vChat client server application',
      description: 'Demonstrattes websockets, nodejs, express, angular 7',
      tehnologies: 'NodeJS, Express, WebSockets, Angular 7, socket.io',
      githubRepoUrl: 'https://github.com/zoom2ashish/v-chat-app'
    },
    {
      title: 'Angular D3 Charts',
      subtitle: 'Examples of D3 Charts',
      description: 'Demonstrates the use of Angular Components+Templates and D3.js layout libraries to create manageable visualization.',
      tehnologies: 'Angular 9, D3.js',
      demoUrl: 'https://zoom2ashish.github.io/angular-d3-experiments/',
      githubRepoUrl: 'https://github.com/zoom2ashish/angular-d3-experiments'
    },
    {
      title: 'Read Text from Image using Tesserect',
      subtitle: '',
      description: 'Experiment with Tesserect.js to extract text from image',
      tehnologies: 'Tesserect.js, Angular',
      demoUrl: 'https://angular-tesserect-example.stackblitz.io',
      githubRepoUrl: 'https://stackblitz.com/edit/angular-tesserect-example'
    },
    {
      title: 'Using Angular Directive as DataProvider',
      subtitle: '',
      description: 'Demonstrates yet another use of Angular Directives to enhance component behaviors',
      tehnologies: 'Angular 8',
      demoUrl: 'https://angular-directive-as-dataprovider.stackblitz.io',
      githubRepoUrl: 'https://stackblitz.com/edit/angular-directive-as-dataprovider'
    },
    {
      title: 'Boilerplate for Express.js + TS.ed',
      subtitle: '',
      description: 'Provides boilerplate code to start Node.js based web-server using Typescript + Express.js + TS.ed',
      tehnologies: 'Node.js, Typescript, Express.js, TS.ed',
      githubRepoUrl: 'https://github.com/zoom2ashish/typescript-express-tsed-starter'
    },
    {
      title: 'Loading Configuration on Angular App Initialization',
      subtitle: '',
      description: 'Demonstrate how to use load configuration on Angular app boostrap using APP_INITIALIZER',
      tehnologies: 'Anuglar 8',
      demoUrl: 'https://angular-load-config-on-init.stackblitz.io',
      githubRepoUrl: 'https://stackblitz.com/edit/angular-load-config-on-init'
    }
  ];
}
