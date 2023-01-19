import { Component } from '@angular/core';
import { Student } from './student';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HAKDOG';
  isAddStudent = false;
  studentsList:Student[] =[{
    id:0,
    LastName: "Cagaanan",
    FirstName: "Hannah",
    Age: 21,
    Nationality: "Filipino",
    Degree:"BEED",
    Gender: "Female",
    Status:"Single",
    HomeAddress: "Candulang, Lila, Bohol",
    Elementary: "Lila Central Elementary School",
    HighSchool: "Lila National High School",
    College: "University of San Carlos"


  },


{
  id:1,
  LastName: "Tempest",
    FirstName: "Rimuru",
    Age: 18,
    Nationality: "Japanese",
    Degree:"BEED",
    Gender:"Male",
    Status:"Single",
    HomeAddress: "Candulang, Lila, Bohol",
    Elementary: "Lila Central Elementary School",
    HighSchool: "Lila National High School",
    College: "University of San Carlos"


}
,


{
  id:1,
  LastName: "Cardiente",
    FirstName: "Jeane",
    Age: 21,
    Nationality: "Filipino",
    Degree:"BSIT",
    Gender:"Female",
    Status:"Single",
    HomeAddress: "chu chu",
    Elementary: "chu",
    HighSchool: "chu",
    College: "chu"


}]
  // isDisabled =  false;
  // InputValue = "";
  // numberValue = 10;

  // sampleClick(){
  //   console.log(this.InputValue)
  // }

  // increaseValue(){
  //   this.numberValue++
  //   this.InputValue = this.numberValue.toString();
  // }
  // decreaseValue(){
  //   this.numberValue--
  //   this.InputValue = this.numberValue.toString();
  // }
  // recieveEvent(){
  //   console.log("test in app component");

  // }
  addStudent(student: Student){
    // console.log(student);
    this.studentsList.push(student);
    this.isAddStudent=false;

  }
  addNewStudent(){
    this.isAddStudent=true;
  }
}




