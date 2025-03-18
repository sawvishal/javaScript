function User(email, password){
    this._email = email
    this._password = password

    Object.defineProperties(this, 'email', {
    get: function(){
        return this._email.toUpperCase()
    },
     set: function(value){
        this._email = value.toUpperCase()
    }
})

Object.defineProperties(this, 'password', {
    get: function(){
        return this._password.toUpperCase()
    },
     set: function(value){
        this._password = value.toUpperCase()
    }
})
}

const chai = new User("chsi@gmail.com", "chai")
console.log(chai.email);
//console.log(chai.password);
