import { Component, } from '@angular/core';
import { BarcodeScannerComponent } from './barcode-scanner/barcode-scanner.component';
import { ZxingScannerComponent } from './zxing-scanner/zxing-scanner.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BarcodeScannerComponent, ZxingScannerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {

  quagga2=true;
  

  switchScanner(){
    this.quagga2 = !this.quagga2;
  }

}
