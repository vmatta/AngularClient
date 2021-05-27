import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/interface/animals';
import { AnimalService } from 'src/app/services/animal.service';
import { first, take } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-display-animal',
  templateUrl: './display-animal.component.html',
  styleUrls: ['./display-animal.component.scss']
})
export class DisplayAnimalComponent implements OnInit {
  animalData: any[] = [];
  hiddenkey: any = ['areaId', 'canFly'];
  isApiload: boolean = false;
  isApiError: boolean = false;
  noDataMsg: string = 'There is no data available to show!';
  animalCount: number = 0;
  headerKey: any = [];
  subscription: any;
  isLoaded: boolean = false;
  constructor(private animalService: AnimalService, private router: Router, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.loadAppData();
    this.loadAnimalsList();
  }

  loadAppData() {
    this.isLoaded = false;
    this.animalService.getAnimals();
  }

  loadAnimalsList() {
    this.isApiload = true;
    this.subscription = this.animalService.animalsList$
      .pipe().subscribe((d: any) => {
        if (d && !this.isLoaded) {
          this.isLoaded = true;
          this.animalData = [];
          this.animalData = d.map((x: any) => {
            return {
              id: x.id,
              name: x.name,
              type: x.type,
              areaName: x.areaName,
              penId: x.penId,
              customAttribute: x.customAttribute
            }
          })
          this.animalCount = this.animalData.length;
          this.loadTableData();
        } else {
          this.isApiError = true;
        }
      },
        (err: any) => {
          this.isApiError = true;
          console.log(err);
        })
  }

  filterOutput(evt: any) {
    this.animalData = evt;
    this.animalCount = evt.length;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  navigateTo() {
    this.router.navigate(['./addanimal'])
  }

  loadTableData() {
    this.headerKey = [];
    Object.keys(this.animalData[0]).forEach(x => {
      this.headerKey.push(x);
    });
  }
}
