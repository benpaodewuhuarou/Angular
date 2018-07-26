import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CanComponentDeactivate } from 'src/app/servers/edit-server/can-deactivate-guard.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit,CanComponentDeactivate{
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changesSaved = false;


  constructor(private serversService: ServersService,
    private router:Router,
  private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(
      (query)=>
      {
        this.allowEdit = query['allowEdit'] === '1'? true :false;

      }
    )
    this.route.params.subscribe(
      (params)=>{
        console.log(params['id']);
        this.server = this.serversService.getServer(+params['id'])
      }
    )
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changesSaved = true;
    this.router.navigate(['../'],{relativeTo:this.route })
  }
  canDeactivate(): Observable<boolean>|Promise<boolean>|boolean{
    if(!this.allowEdit){
      return true;
    }
    if((this.serverName!==this.server.name||this.serverStatus!==this.server.status)&&!this.changesSaved){
      return confirm('Do you want to discard the chagnes?')
    }else{
      return true;
    }
  }

}
