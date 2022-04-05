import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private URL:string='https://jsonplaceholder.typicode.com/posts';

  constructor(private http:HttpClient) { }

  getPost(){
    return (this.http.get(this.URL));
  }

  PostData(obj){
    return (this.http.post(this.URL,obj));
  }

  UpdateData(obj){
    return (this.http.put(`${this.URL}/${obj.id}`,obj));
  }

  DeleteData(id){
    return (this.http.delete(`${this.URL}/${id}`))
  }
  

}
