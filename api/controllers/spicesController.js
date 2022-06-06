const spices = require('../../data/bumbu');

exports.getAll = (req, res) => {
    return res.status(200).json({
        message: "Sucessfull get bumbu",
        data: spices
    });
};

exports.getByName = (req, res) => {
    const {name} = req.params;
    console.log(name)
    const foundSpice = spices.find((spice) => spice.name.toLowerCase() === name.toLowerCase())

    if(!foundSpice){
        return res.status(404).json({
            message: "Failed not found bumbu",
        });
    }
    return res.status(200).json({
        message: "Sucessfull get bumbu",
        data: foundSpice
    });
};