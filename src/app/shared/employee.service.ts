import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  formData: Employee;
  constructor( public http:HttpClient) { }

  getEmployees():Observable<any> {
    //return this.firestore.collection('employees').snapshotChanges();
    return this.http.get<any>("http://localhost:8080/api/getallEmployees");
  }

  addEmployees(data):Observable<any> {
    console.log("this is data", data);
    //return this.firestore.collection('employees').snapshotChanges();
     return this.http.post<any>("http://localhost:8080/api/addemployee", data);
  }

  deleteEmployees(id):Observable<any> {
    //return this.firestore.collection('employees').snapshotChanges();
    return this.http.delete<any>("http://localhost:8080/api/employeeDeleted/"+id);

  }
  UpdateEmployee(id, data):Observable<any> {
    //return this.firestore.collection('employees').snapshotChanges();
    return this.http.put<any>("http://localhost:8080/api/UpdateEmployee/"+id , data);
    
  }
}
