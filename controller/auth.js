const { responseData, responseMessage } = require('../utils/response-handler');

const {
    getUsers
} = require('../model/user-model');

exports.getData = (req, res, next) => {
    const dataUsers = getUsers(res);
    
    responseData(res, 200, dataUsers);
}