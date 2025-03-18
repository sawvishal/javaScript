const user ={
    _email:'hc@dsf.com',
    _password: "abc",


    get email(){
        return this._email.toLocaleUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(user)
console.log(tea.email);
