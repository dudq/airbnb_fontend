import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class FirebaseService {

  tests: Observable<any[]>;

  constructor(private afs: AngularFirestore) {
  }

  getTests() {
    this.tests = this.afs.collection('test').valueChanges();
    return this.tests;
  }
}
