import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireList, AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { DataSnapshot } from '@angular/fire/database/interfaces';
@Injectable({
  providedIn: 'root'
})
export class TestService {

  private dbPath ='/test';
  testsRef: AngularFireList<app.models.Test>;
  testRef: AngularFireObject<app.models.Test>;
  constructor(private db: AngularFireDatabase) {
    
   }

   addTest(test:app.models.Test){
    this.testsRef.push(test);
   }

   getTest(id:string){
     this.testRef = this.db.object('test/'+id);
     return this.testRef;
   }

   getAll(){
     this.testsRef = this.db.list('test');
     return this.testsRef;
   }


}

