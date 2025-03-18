class user{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
        
    }

   static createId(){
        return `123`
    }
}

const hitesh = new user("hitesh")
//console.log(hitesh.createId())

class teacher extends user {

    constructor(username, email){
        this.email = email
    }
}

const iphone = new teacher("iphone ", "i@hitesh.com")
iphone.logme()
