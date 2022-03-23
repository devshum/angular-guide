import { takeUntil } from 'rxjs/operators';
import { AuthService } from './../../../core/services/auth.service';
import { DataStorageService } from './../../../core/services/data-storage.service';
import { Component, EventEmitter, OnInit, Output, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  public isAuth = false;
  private _unsubscribe = new Subject();

  constructor(
    private _dataService: DataStorageService,
    private _authService: AuthService
  ) { }

  ngOnInit(): void {
    this._authService.user.pipe(takeUntil(this._unsubscribe)).subscribe(user => {
      this.isAuth = !!user // !user ? false : true;
    });
  }

  onSaveData() {
    this._dataService.storeRecipes().subscribe(data => {
      console.log(data);
    })
  }

  onLogout() {
    this._authService.logout();
  }

  onFetchData() {
    this._dataService.fetchRecipes();
  }

  ngOnDestroy(): void {
    this._unsubscribe.next();
  }
}
