import { Component, } from '@angular/core';
import { BarcodeScannerComponent } from './barcode-scanner/barcode-scanner.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BarcodeScannerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  

}
