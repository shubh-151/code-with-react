import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query} from "appwrite";

export class Service{
    client  = new Client();
    databases;
    bucket;
    
    constructor(){
    this.client
      .setEndpoint(conf.appwriteurl)
      .setProject(conf.appwriteProjecteID);
      this.databases = new Databases(this.client);  
      this.bucket = new Storage(this.client);

  }
}


const service = new Service()
export default service