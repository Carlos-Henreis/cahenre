import { ElementRef } from "@angular/core";

export interface BlurMaskSettings {
    wrapper: HTMLElement;
    canvas: ElementRef<HTMLCanvasElement>;
    blur: number;
    diameter: number;
    borderRadius: number;
    position: { x: number; y: number };
    onBorder?: boolean;
}
