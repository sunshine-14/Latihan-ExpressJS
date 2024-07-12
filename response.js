const response = (statuscode, datai, msg, res) => {
    res.status(statuscode).json( {
        payload: {
            status_code: statuscode,
            data: datai,
            message: msg
        },
        pagination: {
            prev: "",
            next: "",
            max: ""
        }
    })
}

module.exports = response