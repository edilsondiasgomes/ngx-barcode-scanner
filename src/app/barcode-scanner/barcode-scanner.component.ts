import { Component, OnDestroy, OnInit } from '@angular/core';
import Quagga from '@ericblade/quagga2';

@Component({
  selector: 'app-barcode-scanner',
  standalone: true,
  templateUrl: './barcode-scanner.component.html',
  styleUrls: ['./barcode-scanner.component.scss']
})
export class BarcodeScannerComponent implements OnInit, OnDestroy {

  barcode: string | null = '';

  ngOnInit(): void {
    this.startScanner();
  }

  ngOnDestroy(): void {
    this.stopScanner();
  }

  startScanner() {
    Quagga.init({
      inputStream: {
        name: 'Live',
        type: 'LiveStream',
        target: document.querySelector('#scanner-container')!,
        constraints: {
          width: { ideal: 1280 },
          height: { ideal: 720 },
          facingMode: 'environment' // câmera traseira
        }
      },
      locator: {
        patchSize: 'medium',
        halfSample: true
      },
      decoder: {
        readers: [ 'i2of5_reader','code_128_reader', 'ean_reader', 'ean_8_reader', 'code_39_reader',]
      },
      locate: true
    }, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      Quagga.start();
    });

    Quagga.onDetected(result => {
      const code = result.codeResult.code;
      this.barcode = code;
      console.log('Detected: ', code);

      // Se quiser parar após a primeira leitura:
      // Quagga.stop();
      // this.stopScanner();
    });
  }

  stopScanner() {
    Quagga.stop();
    Quagga.offDetected(() => {});
  }
}
