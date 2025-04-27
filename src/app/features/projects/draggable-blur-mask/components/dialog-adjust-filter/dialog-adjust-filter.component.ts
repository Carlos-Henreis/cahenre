import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { FilterSettingsData } from '../../models/filter-settings-data';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-dialog-adjust-filter',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatSliderModule,
    TranslateModule
  ],
  templateUrl: './dialog-adjust-filter.component.html',
  styleUrl: './dialog-adjust-filter.component.scss',
  standalone: true,
})
export class DialogAdjustFilterComponent {

  constructor(
    private translate: TranslateService,
    public dialogRef: MatDialogRef<DialogAdjustFilterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: FilterSettingsData
  ) {}

  onCancel() {
    this.dialogRef.close(null);
  }

  onSave() {
    this.dialogRef.close(this.data);
  }

}
