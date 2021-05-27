import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  srcUrl = 'http://localhost:8081/'
  animalsList$:any = new BehaviorSubject(null);
  constructor(private http: HttpClient) { }

  getAnimals() {
    this.http.get(this.srcUrl+'zoo/fetchAllAnimals')
      .subscribe((d: any) => {
        this.setAnimalList(d);
      });
  }

  getPenId(){
    return this.http.get(this.srcUrl+'zoo/availablePens');
  }

  setAnimalList(animal: any): void {
    this.animalsList$.next(animal);
  }

  addanimalAPI(addAnimalObj:any){
    this.http.post(this.srcUrl+'animal/addAnimals', addAnimalObj)
    .subscribe(d=>{
      if(d){
        alert('adding animal successfully!')
      }
    },
    (err:any)=>{
      if(err.error){
        alert(err.error.details[0]);
      }else{
        alert('Bad request, Please check your inputs!');
      }
    })
  }
}
