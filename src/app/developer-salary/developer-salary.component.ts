import { Component, OnInit } from '@angular/core';
import { SalaryService } from '../salary.service';

@Component({
  selector: 'app-developer-salary',
  templateUrl: './developer-salary.component.html',
  styleUrls: ['./developer-salary.component.css']
})
export class DeveloperSalaryComponent implements OnInit {
  highSalaryDevelopers: any[] = [];

  constructor(private salaryService: SalaryService) {}

  ngOnInit(): void {
    this.salaryService.getHighSalaryDevelopers().subscribe(
      (data) => {
        this.highSalaryDevelopers = data;
        console.log('High Salary Developers:', this.highSalaryDevelopers);
      },
      (error) => {
        console.error('Error fetching high salary developers:', error);
      }
    );
  }
  
}
