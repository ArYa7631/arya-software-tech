const fs = require('fs');
let users = require('../data/users.json');
const path = require('path');
const filePath = path.join(__dirname, '../../../../../src/data/users.json');

const create = (user) => {
    user.id = users.length ? Math.max(...users.map((x) => x.id)) + 1 : 1;
    user.dateCreated = new Date().toISOString();
    user.dateUpdated = new Date().toISOString();
    users.push(user);
    saveData();
}

const saveData = () => {
    try{
        fs.writeFileSync(filePath, JSON.stringify(users, null, 4), 'utf8');
    }catch(error){
        console.log(error.message);
    }
}
export const usersRepo = {
    create,
    find: (x)=> users.find(x),
}