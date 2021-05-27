import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AnimalService } from 'src/app/services/animal.service';

@Component({
  selector: 'app-filter-animal',
  templateUrl: './filter-animal.component.html',
  styleUrls: ['./filter-animal.component.scss']
})
export class FilterAnimalComponent implements OnInit {

  filterForm: FormGroup = new FormGroup({});
  penid: FormControl = new FormControl('', Validators.required);
  areaId: FormControl = new FormControl('', Validators.required);
  type: FormControl = new FormControl('', Validators.required);

  @Output() filteredDataObj = new EventEmitter();

  constructor(private animalService: AnimalService) { }

  ngOnInit(): void {
    this.formInit();
  }

  formInit() {
    this.filterForm = new FormGroup({
      penid: this.penid,
      areaId: this.areaId,
      type: this.type,
    });
  }

  filterAnimal() {
    let tableData = [];
    let isFilterData = false;
    const formValue = this.filterForm.value;
    this.animalService.animalsList$.subscribe((d: any) => {
      if (d && d.length && !isFilterData) {
        tableData = d;
        let filteredObj = tableData.filter((d: any) =>
          ((formValue.areaId === '' || formValue.areaId === d.areaId) && 
            (formValue.penid === '' || formValue.penid === d.penId) &&
            (formValue.type === '' || formValue.type === d.type)));
        // this.animalService.setAnimalList(filteredObj);  
        this.filteredDataObj.emit(filteredObj)
        isFilterData = true;
      }
    });
  }
}
