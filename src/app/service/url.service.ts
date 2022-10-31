import { Injectable } from '@angular/core';
import { connectStorageEmulator, getDownloadURL, list, ref, Storage, uploadBytes } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  enlace: string = "";

  constructor(private storage: Storage) { }


  public uploadImage($event:any, name: string){

    const file = $event.target.files[0]
    const imagenRef = ref(this.storage, `imagen/` + name)
    uploadBytes(imagenRef, file)
    .then(response => {this.getImage()})
    .catch(error => console.log(error))
  }

  getImage(){
    const imageRef = ref(this.storage, 'imagen')
    list(imageRef)
    .then(async response => {
      for(let item of response.items){
        this.enlace = await getDownloadURL(item);
        console.log("url:" + this.enlace )
      }
    })
    .catch(error => console.log(error))
  }

}
