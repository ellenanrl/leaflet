import { Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  selectedBasemap!: 'streets';
  map!: L.Map;

  constructor() { }
  // ngOnInit() {

  // }

  ionViewDidEnter() {
    this.map = L.map('mapId').setView([-7.774630249645452, 110.37450450431359], 10)

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);


    const baseMaps = {
      'OpenStreetMap': L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }),
      'Satellite': L.tileLayer('https://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
        maxZoom: 20,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
        attribution: '&copy; <a href="https://maps.google.com">Google Maps</a>'
      }),
      'Terrain': L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
        maxZoom: 17,
        attribution: '&copy; <a href="https://www.opentopomap.org">OpenTopoMap</a> contributors'
      })
    };

    // Tambahkan kontrol lapisan ke peta
    L.control.layers(baseMaps).addTo(this.map)

    const markerIcon = L.icon({
      iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png', // Ganti dengan URL ikon marker default dari CON
      iconRetinaUrl:'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',//GantidenganURLikonmarkerdefault2xdariCDN
      shadowUrl:'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',//GantidenganURLbayanganmarkerdefaultdariCON
      iconSize: [25, 41], // Sesuaikan dengan ukuran ikon Anda
      iconAnchor: [12, 41], // Sesuaikan dengan titik penunjuk ikon Anda
    });
  
    const marker = L.marker([-7.774630249645452, 110.37450450431359], { icon: markerIcon}).addTo(this.map)
    .bindPopup('Sekolah Vokasi')
    .openPopup();

    // // Buat marker dan tambahkan ke peta
    // const marker = L.marker([-7.774630249645452, 110.37450450431359]).addTo(this.map);

    // // Tambahkan popup ke marker
    // marker.bindPopup("<b>Halo Halo </b><br>Aku marker.").openPopup();
  }
}

