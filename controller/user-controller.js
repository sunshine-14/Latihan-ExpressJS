const { responseData, responseMessage } = require('../utils/response-handler');

const {
    getUsers
} = require('../model/user-model');

exports.getData = (req, res, next) => {
    const dataUsers = getUsers();
    
    responseData(res, 200, dataUsers);
}

exports.getDataById = (req, res) => {
    const user = getUsers(req.params.id);
    if (user) {
        responseData(res, 200, user);
    } else {
        responseMessage(res, 404, 'User tidak ditemukan');
    }
};