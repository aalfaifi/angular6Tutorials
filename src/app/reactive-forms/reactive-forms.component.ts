import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, FormArray } from '@angular/forms'

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {
  myForm: FormGroup;
  myNestedForm: FormGroup;
  myDaynamicForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm=this.fb.group({
      name:'',
      email:'',
      phone:''
    });
    this.myForm.valueChanges.subscribe(data=>{
      console.log(data['email']);
    });
    // Nested Form
    const phone= this.fb.group({
      area:[],
      prefix:[],
      line:[]
    });

    this.myNestedForm=this.fb.group({
      name:'',
      email:'',
      mobile:phone,
      landline:phone
    });

    // Dynamic Form
   
    this.myDaynamicForm=this.fb.group({
      name:'',
      email:'',
      phones:this.fb.array([])
    });
    this.addPhone();
  }

  get phoneForms (){
    return this.myDaynamicForm.get('phones') as FormArray;
  }

  addPhone(){
    const phone= this.fb.group({
      area:[],
      prefix:[],
      line:[]
    });
    this.phoneForms.push(phone);
  }
  deletePone(i){
    this.phoneForms.removeAt(i);
  }

}
