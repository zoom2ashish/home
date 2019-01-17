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
    }
  ];
}
