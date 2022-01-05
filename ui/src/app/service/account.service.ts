import { Injectable } from '@angular/core';
import { IUserAccount } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  accountInfo: IUserAccount = {
    name: 'Reza Sharafi',
    id: '9',
    phoneNumber: '09356528945',
  };

  constructor() {}

  getAccountInfo() {
    return this.accountInfo;
  }
}
