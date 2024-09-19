import { Component } from '@angular/core';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'WIP';
  testList: any[] = [];  // This will store the list of targets

  constructor(private service: SharedService) {}

  getTargets() {
    this.service.getTestList().subscribe(
      (data: any[]) => {
        this.testList = data;  // Assign the retrieved data to `targetList`
        console.log(this.testList)
      },
      (error) => {
        console.error("Error fetching target list:", error);  // Handle error
      }
    );
  }
}
