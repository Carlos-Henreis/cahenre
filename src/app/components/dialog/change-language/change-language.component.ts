import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-change-language',
  imports: [
    TranslateModule,
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  templateUrl: './change-language.component.html',
  styleUrl: './change-language.component.scss'
})
export class ChangeLanguageComponent {

  languageControl = new FormControl('', [Validators.required, Validators.pattern('^(en|pt)$')]);

  constructor(public dialogRef: MatDialogRef<ChangeLanguageComponent>) {}

  onSubmit(): void {
    if (this.languageControl.valid) {
      this.dialogRef.close(this.languageControl.value);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }

}
