import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormsService} from '../forms.service';
import {Subject} from 'rxjs';
import {FormGroup} from '@angular/forms';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css'],
  styles: [`
        input.ng-invalid {border:solid red 2px;}
        input.ng-valid {border:solid gray 2px;}
    `],
})
export class NameComponent implements OnInit, OnDestroy {

  public fullNameControl: FormGroup;

  public subject$ = new Subject();

  constructor(private formsService: FormsService) { }

  ngOnInit() {
     this.fullNameControl = this.formsService.getFullNameControl();
     // console.log(this.fullNameControl);

     this.fullNameControl.valueChanges
      .pipe(takeUntil(this.subject$))
      .subscribe((value) => {
        this.nameChange(value.name[0], value.name[1]);
        // console.log(value);
      });
  }
  ngOnDestroy(): void {
    this.subject$.unsubscribe();
  }

  nameChange(firstName: string, lastName: string): void {
    this.formsService.setFullName(firstName, lastName);
    this.fullNameControl = this.formsService.getFullNameControl();
  }

}
