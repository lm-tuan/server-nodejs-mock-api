const { v4: uuidv4 } = require('uuid');

class Project {
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

function radomProjectList(numberRd = 0){
    let lst = [], project = null, charKey = '';
    if(!numberRd ||!Number.isInteger(numberRd)){
        return [];
    }
    for(let i = 1; i <= numberRd; i++ ){
        charKey = randomString(1);
        project = new Project(uuidv4(),`Project ${charKey}`, `Descrition ${charKey}`, new Date());
        lst.push(project);
        project = null;
    }
    return lst;
}

const projects = radomProjectList(5)
module.exports = {
    projects
}