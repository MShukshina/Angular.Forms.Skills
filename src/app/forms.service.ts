import {Injectable, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  fullNameControl: FormGroup;
  skillsControl: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.fullNameControl = this.formBuilder.group({
      name: this.formBuilder.array([
        ['Masha'],
        ['Shukshina']
      ])
    });

    this.skillsControl = this.formBuilder.group({
      skills: ''
    });
  }

  getFullNameControl(): FormGroup {
    return this.fullNameControl;
  }

  getSkillsControl(): FormGroup {
    return this.skillsControl;
  }

  getSkills(): Array <{id: string, name: string}> {
    return [
      { id: '1', name: 'Angular' },
      { id: '2', name: 'RXJS' },
      { id: '3', name: 'Reactive Forms' },
      { id: '4', name: 'CSS' }
    ];
  }

  setFullName(firstName: string, lastName: string): void {
    this.fullNameControl.controls.name.value[0] = firstName;
    this.fullNameControl.controls.name.value[1] = lastName;
  }
}
