import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css'
})
export class CreateEmployeeComponent {
  fullName:string="";
  email:string="";

  saveEmployee(employeeForm: NgForm): void {
    console.log(employeeForm.value);
  }
}
