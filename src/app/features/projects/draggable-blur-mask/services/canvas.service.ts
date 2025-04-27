import { Injectable } from '@angular/core';
import { BlurMaskSettings } from '../models/blur-mask-settings';

@Injectable({
  providedIn: 'root'
})
export class CanvasService {

  constructor() { }

  async getBase64ImageWithBlur(settings: BlurMaskSettings): Promise<string | null> {
    return new Promise((resolve, reject) => {
      const canvas = settings.canvas.nativeElement;
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        reject(null);
        return;
      }

      const img = new Image();
      img.src = settings.wrapper.getAttribute('src') || '';

      img.onload = () => {
        try {
          canvas.width = img.width;
          canvas.height = img.height;
          ctx.drawImage(img, 0, 0);
          ctx.save();

          const scaleX = img.width / settings.wrapper.clientWidth;
          const scaleY = img.height / settings.wrapper.clientHeight;
          const scaledDiameter = settings.diameter * Math.max(scaleX, scaleY);
          const scaledRadius = settings.borderRadius * Math.max(scaleX, scaleY);
          const scaledX = settings.position.x * scaleX;
          const scaledY = settings.position.y * scaleY;

          ctx.globalCompositeOperation = 'source-over';
          ctx.filter = `blur(${settings.blur}px)`;
          ctx.beginPath();
          ctx.roundRect(scaledX, scaledY, scaledDiameter, scaledDiameter, scaledRadius);
          if (settings.onBorder) {
            ctx.save();
            ctx.filter = 'none';
            ctx.lineWidth = 1;
            ctx.strokeStyle = 'black';
            ctx.stroke();
            ctx.restore();
          }
          ctx.clip();
          ctx.drawImage(img, 0, 0);

          const imageBase64WithBlur = canvas.toDataURL();
          resolve(imageBase64WithBlur);

        } catch (error) {
          console.error('Erro processando canvas:', error);
          reject(null);
        }
      };

      img.onerror = (error) => {
        console.error('Erro carregando imagem:', error);
        reject(null);
      };
    });
  }
}
