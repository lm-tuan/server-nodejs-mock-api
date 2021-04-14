const { v4: uuidv4 } = require('uuid');

class Phone {
    constructor(id, name, descrition, create_date){
        this.id = id;
        this.name = name;
        this.descrition = descrition;
        this.create_date = create_date;
    }
}

// function random A -> Z
function randomString(len) {
    var p = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return [...Array(len)].reduce(a=>a+p[~~(Math.random()*p.length)],'');
}

function radomPhoneList(numberRd = 0){
    let lst = [], phone = null, charKey = '';
    if(!numberRd ||!Number.isInteger(numberRd)){
        return [];
    }
    for(let i = 1; i <= numberRd; i++ ){
        charKey = randomString(1);
        phone = new Phone(uuidv4(),`Phone ${charKey}`, `Descrition ${charKey}`, new Date());
        lst.push(phone);
        phone = null;
    }
    return lst;
}

const phones = radomPhoneList(5)
module.exports = {
    phones
}