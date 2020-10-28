export class Contact {
    static currentID: number = 10000;
    public contactID: number;
    public firstName: string;
    public lastName: string;
    public address: string;
    public website: string;
    public imagePath: string;
    public telephones: string[] =[];
    public phones: string[] =[];
    public mails: string[] =[];

    constructor(firstName: string,lastName: string,address: string,website: string,imagePath: string){
        this.contactID = Contact.currentID++;
        this.setFirstName(firstName)
        this.setLastName(lastName)
        this.setAddress(address)
        this.setWebsite(website)
        if(imagePath==null){
            this.imagePath = "https://www.malenydentist.com.au/wp-content/uploads/2013/08/Person-icon-grey.jpg";
        }else{
            this.imagePath = imagePath
        }
        
    }
    setFirstName(firstName: string){
        this.firstName = firstName;
    }
    setLastName(lastName: string){
        this.lastName = lastName;
    }
    setAddress(address: string){
        this.address = address;
    }
    setWebsite(website: string){
        this.website = website;
    }
    setImagePath(imagePath: string){
        this.imagePath = imagePath;
    }
    addTelephone(telephone: string){
        this.telephones.push(telephone);
    }
    addPhone(phone: string){
        this.phones.push(phone);
    }
    addMail(mail: string){
        this.mails.push(mail);
    }
    delTelephone(telephone: string){
        let i = this.telephones.indexOf(telephone);
        this.telephones.splice(i,1);
    }
    delPhone(phone: string){
        let i = this.phones.indexOf(phone);
        this.phones.splice(i,1);
    }
    delMail(mail: string){
        let i = this.mails.indexOf(mail);
        this.mails.splice(i,1);
    }
}
