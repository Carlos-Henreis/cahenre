import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import { BlurMaskComponent } from './components/blur-mask/blur-mask.component';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'; // se usar inputs
import { MatLabel } from '@angular/material/form-field';
import { InputFileComponent } from './components/input-file/input-file.component';
import { MatIcon } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ScreenService } from '../../../services/screen.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogAdjustFilterComponent } from './components/dialog-adjust-filter/dialog-adjust-filter.component';
import { FilterSettingsData } from './models/filter-settings-data';
import { MatMenuModule } from '@angular/material/menu';
import { CanvasService } from './services/canvas.service';
import { BlurMaskSettings } from './models/blur-mask-settings';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { TranslateModule } from '@ngx-translate/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-draggable-blur-mask',
  imports: [
    CommonModule,
    MatMenuModule,
    BlurMaskComponent,
    TranslateModule,
    InputFileComponent,
    MatInputModule,
    MatSliderModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatLabel,
    FormsModule,
    MatIcon,
    MatToolbarModule
  ],
  templateUrl: './draggable-blur-mask.component.html',
  styleUrl: './draggable-blur-mask.component.scss'
})
export class DraggableBlurMaskComponent {
  data: FilterSettingsData;
  preview: string = '';
  newImage: number = 0;
  positionMask: { x: number; y: number } = { x: 0, y: 0 };
  isBorder: boolean = false;
  @ViewChild('wrapperRef') wrapperRef!: ElementRef<HTMLImageElement>;
  @ViewChild('canvas') canvas!: ElementRef<HTMLCanvasElement>;

  constructor(
    public screen: ScreenService,
    private canvasService: CanvasService,
    private dialog: MatDialog,
    private titleService: Title, 
    private metaService: Meta
  ) {
    this.data = {
      blur: 0,
      diameter: 0,
      borderRadius: 0,
      maxBlur: 0,
      maxDiameter: 100000000,
      maxBorderRadius: 0
    };
    this.preview = '/shiba.jpg';
  }

  ngOnInit() {
    this.titleService.setTitle('Carlos Henrique Reis - Draggable blur mask over image');
    this.metaService.updateTag({ name: 'description', content: 'Draggable blur mask over image (use canvas/angular)' });
    this.metaService.updateTag({ name: 'keywords', content: 'Draggable Blur Mask, Blur mask, Angular blur' });

    this.metaService.updateTag({
      property: 'og:title',
      content: 'Carlos Henrique Reis - Draggable blur mask over image'
    });

    this.metaService.updateTag({
      property: 'og:description',
      content: 'Draggable blur mask over image (use canvas/angular)'
    });

    this.metaService.updateTag({
      property: 'og:image',
      content: 'https://cahenre.com.br/projects/blur.png'
    });
  }



  onImageLoad() {
    this.reset();
    this.newImage += 1;
  }

  onBase64Received(message: string) {
    this.preview = message;
  }

  getPositionMask({ x, y }: { x: number; y: number }) {
    this.positionMask = { x, y };
  }

  reset() {
    if (this.wrapperRef) {
      this.data.maxBlur = 100;
      this.data.maxDiameter = Math.min(this.wrapperRef.nativeElement.clientWidth, this.wrapperRef.nativeElement.clientHeight);
      this.data.maxBorderRadius = 50;
      this.data.blur = this.data.maxBlur / 2;
      this.data.diameter = this.data.maxDiameter / 2;
      this.data.borderRadius = 50 / 2;
      this.isBorder = false;
    }
  }

  async downloadImage() {
    // Usar service canvas
    const settings: BlurMaskSettings = {
      wrapper: this.wrapperRef.nativeElement,
      canvas: this.canvas,
      blur: this.data.blur,
      diameter: this.data.diameter,
      borderRadius: this.data.borderRadius,
      position: this.positionMask,
      onBorder: this.isBorder,
    };

    const base64Image = await this.canvasService.getBase64ImageWithBlur(settings);

    if (base64Image) {
      const link = document.createElement('a');
      link.href = base64Image;
      const extension = base64Image.split(';')[0].split('/')[1];
      link.download = 'image_blur.' + extension;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

    } else {
      console.error('Falha ao gerar a imagem com blur.');
    }
  }





  openFilterDialog() {
    const dialogRef = this.dialog.open(DialogAdjustFilterComponent, {
      width: '350px',
      data: this.data,
    });

    dialogRef.afterClosed().subscribe((result: FilterSettingsData | null) => {
      if (result) {
        this.data.blur = result.blur;
        this.data.diameter = result.diameter;
        this.data.borderRadius = result.borderRadius;
        this.data.maxBlur = result.maxBlur;
        this.data.maxDiameter = result.maxDiameter;
        this.data.maxBorderRadius = result.maxBorderRadius;
      }
    });
  }
}