import { Component } from '@angular/core';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { BarcodeFormat } from '@zxing/library';


@Component({
  selector: 'app-zxing-scanner',
  standalone: true,
  imports: [ZXingScannerModule],
  templateUrl: './zxing-scanner.component.html',
  styleUrl: './zxing-scanner.component.scss'
})

export class ZxingScannerComponent {

  allowedFormats = [
    BarcodeFormat.QR_CODE,
    BarcodeFormat.EAN_13,
    BarcodeFormat.CODE_128,
    BarcodeFormat.DATA_MATRIX,
    BarcodeFormat.ITF
  ];
  result = '';

  scanCompleteHandler(result: any) {
    console.log('Código detectado:', result);
    this.result = result;
  }

}
