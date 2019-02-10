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
      // console.log(response);
    })
    let obs = this.http.get('https://api.github.com/users/'+ this.userName+'/repos')
    obs.subscribe((reposObj) =>{
      this.reposObj = reposObj;
      // console.log(reposObj);
    })
    let obs = this.http.get('https://api.github.com/users/'+ this.userName+'/starred')
    obs.subscribe((starObj) =>{
      this.starObj = starObj;
      console.log(starObj);
    })
  }
}
