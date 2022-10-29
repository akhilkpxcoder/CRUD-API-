const getUsers = require('./getUser');
const getUser = require('./getUser');
const createUser = require('./createUser');
const updateUser = require('./updateUser');
const deleteUser = require('./deleteUser');
const loginUser = require('../users/loginUser');

module.exports = {
    paths:{
        '/Users':{
            ...getUsers,
            ...createUser,
            ...updateUser
        },
        '/Users/{username}':{
            ...getUser,
            ...deleteUser
        },
        '/login':{
            ...loginUser,
        }
    }
}