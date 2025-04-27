import { Component, EventEmitter, ViewChild, ElementRef, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ScreenService } from '../../../../../services/screen.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'input-file',
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    TranslateModule,
    MatIconModule
  ],
  templateUrl: './input-file.component.html',
  styleUrl: './input-file.component.scss',
  standalone: true
})
export class InputFileComponent {

  fileName: string = '';
  newImage = false;
  @Output() preview = new EventEmitter<string>();

  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  constructor(
    public screen: ScreenService
  ) {}

  openFilePicker() {
    this.fileInput.nativeElement.click();
  }

  onFileSelected(event: any): void {
    this.newImage = false;
    const selectedFiles = event.target.files;

    if (selectedFiles && selectedFiles[0]) {
      this.fileName = selectedFiles[0].name;
      const numberOfFiles = selectedFiles.length;
      for (let i = 0; i < numberOfFiles; i++) {
        const reader = new FileReader();

        reader.onload = (e: any) => {
          this.preview.emit(e.target.result);
        };

        reader.readAsDataURL(selectedFiles[i]);
      }
      this.newImage = true;
    }
  }

}
