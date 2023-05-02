import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Directiveprac';
  // courses = [1,2]
  courses = []
  // imageUrl = 'https://picsum.photos/200';  // property binding

  // for ngSwitch prac
    viewMode = 'map';
}
