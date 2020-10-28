import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Group } from 'src/app/DTO/group';
import { GroupsService } from 'src/app/Services/groups.service';

@Component({
  selector: 'app-group-item',
  templateUrl: './group-item.component.html',
  styleUrls: ['./group-item.component.css']
})
export class GroupItemComponent implements OnInit {
  @Input() group: Group;
  constructor(private groupService: GroupsService) {    
  }

  ngOnInit(): void {
  }
  onSelected(){
    this.groupService.selectedGroup = this.group
  }
}
