import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Group } from 'src/app/DTO/group';
import { GroupsService } from 'src/app/Services/groups.service';
import { AddGroupRequest } from 'src/app/DTO/Requests/add-group-request';
import { DeleteGroupRequest } from 'src/app/DTO/Requests/delete-group-request';


@Component({
  selector: 'app-groups-list',
  templateUrl: './groups-list.component.html',
  styleUrls: ['./groups-list.component.css']
})
export class GroupsListComponent implements OnInit {
  
  groups: Group[] = [];
  currentGroup: Group;
  currentIndex: number;

  showAddSection = false;
  showDelSection = false;

  addRespone = ""
  deleteRespone = ""

  newName = "";
  newDesc = "";
  newImg = "";

  constructor(private groupService: GroupsService) { 
  }

  ngOnInit(): void {
    this.groups = this.groupService.User.groups;
  }

  onShowAddSection(){
    this.showAddSection = !this.showAddSection;
    this.showDelSection = false;
  }
  onShowADelSection(){
    if(this.groupService.selectedGroup.groupID!=0){
      this.showDelSection = !this.showDelSection;
      this.showAddSection = false;
    }
  }
  onAddSumbit(){
    if(this.newName!=""){
      var g = new Group();
      g.setGroupName(this.newName);
      if(this.newDesc!="")
        g.setGroupDesc(this.newDesc);
      if(this.newImg!="")
      g.setGroupImg(this.newImg);
      this.groupService.AddGroup(new AddGroupRequest(null,g))
      .subscribe(
        AddGroupResponse => this.addRespone = AddGroupResponse.Message()
      )
      if(this.addRespone=="Succed adding group"){
        console.log("Succed adding group")
        this.onShowAddSection();
      }
    }
  }
  onDelYes(){
    if(this.groupService.selectedGroup!=null){
      this.groupService.deleteGroup(new DeleteGroupRequest(null,this.groupService.selectedGroup.groupID))
      .subscribe(
        DeleteGroupResponse => this.deleteRespone = DeleteGroupResponse.Message()
      )
      if(this.deleteRespone="")
      console.log("")
      this.onShowADelSection()
    }
  }

}
