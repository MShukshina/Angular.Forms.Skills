import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormsService} from '../forms.service';
import {FormGroup} from '@angular/forms';
import {takeUntil} from 'rxjs/operators';
import {of, Subject} from 'rxjs';

@Component({
  selector: 'app-skils',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit, OnDestroy {

  public skillsControl: FormGroup;
  skills = [];

  public subject$ = new Subject();

  constructor(private formsService: FormsService) { }

  ngOnInit() {
     this.skillsControl = this.formsService.getSkillsControl();
     this.skills = this.formsService.getSkills();

     console.log(this.skillsControl);
     console.log(this.skills);

     this.skillsControl.valueChanges
        .pipe(takeUntil(this.subject$))
        .subscribe((value) => {
          console.log(value);
        });
  }

  ngOnDestroy(): void {
    this.subject$.unsubscribe();
  }


}
