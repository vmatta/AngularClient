import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AnimalService } from 'src/app/services/animal.service';


@Component({
  selector: 'app-add-animal',
  templateUrl: './add-animal.component.html',
  styleUrls: ['./add-animal.component.scss']
})
export class AddAnimalComponent implements OnInit {

  addAnimal: FormGroup = new FormGroup({});
  name: FormControl = new FormControl('', Validators.required);
  type: FormControl = new FormControl('', Validators.required);
  penId: FormControl = new FormControl('', Validators.required);
  areaId: FormControl = new FormControl('', Validators.required);
  penIds:any = [];
  constructor(private animalService: AnimalService) { }

  ngOnInit(): void {
    this.penIdLoad();
    this.formInit();
  }

  penIdLoad(): void {
    this.animalService.getPenId()
      .subscribe((d:any) => {
        this.penIds = d;
      }, 
      (err: any)=>{
        alert('unable to load PenId, Please refresh page')
      })
  }

  formInit(): void {
    this.addAnimal = new FormGroup({
      name: this.name,
      type: this.type,
      penId: this.penId,
      areaId: this.areaId,
    });
  }

  selectPID(evt:any){
  }

  addAnimalSubmit() {
    console.log(this.addAnimal.value)
    this.animalService.addanimalAPI(this.addAnimal.value);
  }
}
