import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  indexStr : string = "";
  rgbStyle: string = "";
  @Input() public index!: number;
  @Input() public pokemon!: any;

  constructor() {

  }

  ngOnInit(): void {
    // padStart(3, '0') = 1 -> xxx -> 001
    // padStart(4, 'Y') = 1 -> xxxx -> YYY1
    // padStart(2, ';') = 1 -> xx -> ;1
    // padStart(3, '0') = 130 -> xxx -> 130
    // padStart(3, '0') = 50 -> xxx -> 050
    this.indexStr = String(this.pokemon.id).padStart(3, '0');
    // this.rgbStyle = this.getRgbStyleStringFromRgb(this.getAverageRGB('/assets/thumbnails/' + this.indexStr + '.png'));
  }

  getRgbStyleStringFromRgb(rgb: any) {
    return "rgb(" + rgb.r + ", " + rgb.g + ", " +rgb.b + ")";
  }

  getAverageRGB(imgUrl: string) {

    var imgEl = document.createElement('img');
    imgEl.src = imgUrl;

    var blockSize = 5, // only visit every 5 pixels
        defaultRGB = {r:0,g:0,b:0}, // for non-supporting envs
        canvas = document.createElement('canvas'),
        context = canvas.getContext && canvas.getContext('2d'),
        data, width, height,
        i = -4,
        length,
        rgb = {r:0,g:0,b:0},
        count = 0;

    if (!context) {
        return defaultRGB;
    }

    height = canvas.height = imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
    width = canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;

    context.drawImage(imgEl, 0, 0);

    try {
        data = context.getImageData(0, 0, width, height);
    } catch(e) {

        return defaultRGB;
    }

    length = data.data.length;

    while ( (i += blockSize * 4) < length ) {
        ++count;
        rgb.r += data.data[i];
        rgb.g += data.data[i+1];
        rgb.b += data.data[i+2];
    }

    // ~~ used to floor values
    rgb.r = ~~(rgb.r/count);
    rgb.g = ~~(rgb.g/count);
    rgb.b = ~~(rgb.b/count);

    return rgb;

}

}
