const { v4: uuidv4 } = require('uuid');

class PhoneNumber {
    constructor(id, number, descrition,is_status, create_date){
        this.id = id;
        this.number = number;
        this.is_status = is_status
        this.descrition = descrition;
        this.create_date = create_date;
    }
}

// function random A -> Z
function randomString(len) {
    var p = "0123456789";
    return [...Array(len)].reduce(a=>a+p[~~(Math.random()*p.length)],'');
}

function radomPhoneNumber(numberRd = 0){
    let lst = [], phoneNumber = null, charKey = '', isStatus = 0;
    if(!numberRd ||!Number.isInteger(numberRd)){
        return [];
    }
    for(let i = 1; i <= numberRd; i++ ){
        charKey = randomString(1);
        isStatus = charKey > 5 ? 1 : 0
        phoneNumber = new PhoneNumber(
            uuidv4(),
            `035912455${charKey}`, 
            isStatus,
            `Descrition ${charKey}`,
            new Date());
        lst.push(phoneNumber);
        phoneNumber = null;
    }
    return lst;
}

const phone_numbers = radomPhoneNumber(5)
module.exports = {
    phone_numbers
}