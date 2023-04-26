import { Injectable } from '@nestjs/common';
import { userModel } from 'models/Users/userModel';

@Injectable()
export class ApiUsersServices extends userModel {
  getAllUsers() {
    const users: userModel[] = [];
    let user: userModel = {};

    user.name = 'haha';
    users.push(user);

    return users;
  }
}
