class user {
    constructor(email, password){
        this.email = email,
        this.password = password
    }
    
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }


    get password(){
        return `${this._password}hitesh`
    }

    set password(value){
        this._password = value.toUpperCase()
    }
}

 const hitesh = new user("hitesh.ai","abd")
 console.log(hitesh.email);
 