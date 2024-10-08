import { Injectable } from "@angular/core";
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Guard implements CanActivate {

  canActivate() {
    const d = new Date();
    const day = d.getDay();
    if (day == 0) {
      return false;
    } else {
      return true;
    }
  }
}
