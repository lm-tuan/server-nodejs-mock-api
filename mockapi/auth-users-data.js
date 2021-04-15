const { v4: uuidv4 } = require('uuid');

class Username {
    constructor(id, email, password, create_date){
        this.id = id;
        this.email = email;
        this.password = password;
        this.create_date = create_date;
    }
}

class AuthUser{
    constructor(users = usersList ){
        this.users = users;
    }
    getAll(){
        return this.users;
    }
    getById(id){
        let userId = null;
        for(let i = 0 ;i< this.users.length ; i++){
            if(this.users[i].email === email){
                userId = this.users[i];
                break;
            }
        }
        return userId;
    }
    getByEmail(email){

        let userId = null;
        for(let i = 0 ;i< this.users.length ; i++){
            if(this.users[i].email === email){
                userId = this.users[i];
                break;
            }
        }
        return userId;

    }
}

// function random A -> Z
function randomString(len) {
    var p = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return [...Array(len)].reduce(a=>a+p[~~(Math.random()*p.length)],'');
}

function radomUserList(numberRd = 0){
    let lst = [], user = null, charKey = '';
    if(!numberRd ||!Number.isInteger(numberRd)){
        return [];
    }
    let userRoot= new Username(
      uuidv4(),
    `leminhtuan12b1@gmail.com`, 
    `123456`, 
    new Date());
    lst.push(userRoot);
    for(let i = 1; i <= numberRd; i++ ){
        charKey = randomString(1);
        user = new Username(uuidv4(),`ahne${uuidv4()}${charKey}@gmail.com`, `123456`, new Date());
        lst.push(user);
        user = null;
    }
    return lst;
}

const usersList = radomUserList(5)
module.exports.AuthUser = AuthUser;