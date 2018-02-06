import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Platform } from 'ionic-angular';
import L from "leaflet";


/**
 * Generated class for the InicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {

  map: L.Map;
  coords : any = { lat: 0, lng: 0 }

  greenIcon:any = L.icon({
    iconUrl: 'assets/imgs/leaf-green.png',
    shadowUrl: 'assets/imgs/leaf-shadow.png',

    iconSize:     [38, 95], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
  });

  constructor(public navCtrl: NavController, public navParams: NavParams, public  platform: Platform,
   public geolocation: Geolocation,public modalCtrl : ModalController,) {

   platform.ready().then(() => {
      // La plataforma esta lista y ya tenemos acceso a los plugins.
        this.obtenerPosicion();
     });
   
  }

  loadMap(){
  this.map = L.map('map', {
      center: this.coords,
      zoom: 15
    });

  L.marker(this.coords, {icon: this.greenIcon}).addTo(this.map);

    //Add OSM Layer
    L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
      .addTo(this.map);

  }

  obtenerPosicion():any{
    this.geolocation.getCurrentPosition().then(res => {
      this.coords.lat = res.coords.latitude;
      this.coords.lng = res.coords.longitude;

      this.loadMap();
    })
    .catch(
      (error)=>{
        console.log(error);
      }
    );
  }

  nuevoSitio(){
   // aquí vamos a abrir el modal para añadir nuestro sitio.
   let mimodal = this.modalCtrl.create( 'ModalNuevoSitioPage',this.coords );
   mimodal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
  }

}
