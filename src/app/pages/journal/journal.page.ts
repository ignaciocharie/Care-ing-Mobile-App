import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.page.html',
  styleUrls: ['./journal.page.scss'],
})
export class JournalPage implements OnInit {
  goalForm = this.fb.group({
    goal: [''],
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onSave() {
    console.log(this.goalForm.value)

  }

}
