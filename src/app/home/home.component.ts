import {Component} from '@angular/core';
import {Employee} from "../models/employee.model";


@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {

  languages = [
    'English',
    'Spanish',
    'Other'
  ]

  model = new Employee('Darla', 'Smith', false, 'w2', 'English');
}
