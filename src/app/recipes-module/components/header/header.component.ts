import { DataStorageService } from './../../../core/services/data-storage.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(
    private _dataService: DataStorageService
  ) { }

  ngOnInit(): void {
  }

  onSaveData() {
    this._dataService.storeRecipes().subscribe(data => {
      console.log(data);
    })
  }
}
