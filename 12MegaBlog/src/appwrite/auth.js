import conf from "../conf/conf";
import { Client, Account } from "appwrite";

export class AuthService {
  client = new Client();
  account;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteurl)
      .setProject(conf.appwriteProjected);
    this.account = new Account(this.client);
  }
}

const authService = new AuthService();

export default authService;
