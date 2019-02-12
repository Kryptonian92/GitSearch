import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  userName: string = "";
  response: any;
  reposObj: any;
  starObj: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  search(){
    let obs = this.http.get('https://api.github.com/users/'+ this.userName)
    obs.subscribe((response) =>{
      this.response = response;
    })
    let obsNew = this.http.get('https://api.github.com/users/'+ this.userName+'/repos')
    obsNew.subscribe((reposObj) =>{
      this.reposObj = reposObj;
    })
    let ob = this.http.get('https://api.github.com/users/'+ this.userName+'/starred')
    ob.subscribe((starObj) =>{
      this.starObj = starObj;
      console.log(starObj);
    })
  }
}
