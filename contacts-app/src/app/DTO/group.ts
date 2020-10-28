import { Contact } from './contact';

export class Group {
    static currentID: number = 3000;
    public groupID: number;
    public groupName: string;
    public groupDescription: string;
    public imagePath: string;
    public members: Contact[] = [];
    public numOfMembers: number = 0;

    constructor(){
        this.groupID = Group.currentID++;
        this.groupName = "New Group";
        this.groupDescription = "description"
        this.imagePath = "https://cdn0.iconfinder.com/data/icons/web-development-71/64/z-96-512.png";
    }

    setGroupName(name: string){
        this.groupName = name;
    }
    setGroupDesc(desc: string){
        this.groupDescription = desc;
    }
    setGroupImg(imgpath: string){
        this.imagePath = imgpath;           
    }
    addContact(contact: Contact){
        this.members.push(contact);
        this.numOfMembers++;
    }
    delContact(contactID: number){
        let i = this.getCurrContactIndex(contactID);
        this.members.splice(i,1);
        this.numOfMembers--;
    }
    getCurrContactIndex(contactID: number){
        for (let i = 0; i < this.members.length; i++) {
          if(this.members[i].contactID == contactID){
            return i;
          }
        }
      }
}
