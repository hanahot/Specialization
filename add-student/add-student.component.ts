import { Component,Output,EventEmitter } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
  ngOnInit(){
    this.studentForm.reset();
  }
  @Output() studentOut= new EventEmitter()
studentForm = new FormGroup({
  FirstName: new FormControl(''),
  LastName: new FormControl(''),
  Age: new FormControl(0),
  Gender: new FormControl(''),
  Nationality: new FormControl(''),
  Degree: new FormControl(''),

})
addStudent(){

  // console.log(this.studentForm.value)
  this.studentOut.emit(this.studentForm.value)

}

}
