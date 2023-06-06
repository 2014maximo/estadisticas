import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, getDoc, collectionData,getFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class EstadisticasService {

  constructor( private firestore: Firestore ){}



/*   async create(collection: string, data: any){
    try {
      return await this.firestore.collection(collection).add(data);
    }catch(error){
      console.error(error);
      return null
    }
  }
*/


  async getData(collections: any){
    try {
    const collectionsInstance = collection(this.firestore, collections);
    return collectionData(collectionsInstance).subscribe({
      next:(resp)=>{
        console.log(resp, 'RESPUESTA');
      }
    })

      // return await getDoc(collections)
    } catch(error){
      console.error(error);
      return null
    }
  }

/*

  async getById(collection: any, id:any){
    try {
      return await this.firestore.collection(collection).doc(id).get();
    } catch(error){
      console.error(error);
      return null
    }
  }

  async delete(collection: any, id:any){
    try {
      return await this.firestore.collection(collection).doc(id).delete();
    } catch(error){
      console.error(error);
      return null
    }
  }
  async update(collection: any, id:any, dato: any){
    try {
      return await this.firestore.collection(collection).doc(id).set(dato);
    } catch(error){
      console.error(error);
      return null
    }
  } */
}
