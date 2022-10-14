export class LoginRequestModel {
  user_name: string;
  password: string;

  constructor(val: any) {
    this.user_name = val.user_name;
    this.password = val.password;
  }
}
