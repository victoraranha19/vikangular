import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { INavbarContents } from '../../../../viklib/src/public-api';
import { navbarAPI } from '../../../public/data';

@Injectable({
  providedIn: 'root',
})
export class VikService {
  private _data$ = new BehaviorSubject<INavbarContents[]>(navbarAPI);

  constructor() {}

  getNavbar(): Observable<INavbarContents[]> {
    return this._data$.asObservable();
  }

  setNavbar(novo: INavbarContents[]) {
    this._data$.next(novo);
  }
}
