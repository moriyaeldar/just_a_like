const catchAsync = require('../utillities/catchAsync');

module.exports.index = catchAsync(async (req, res) => {
    res.json("All projects");
});


module.exports.createProject = catchAsync(async (req, res) => {
    res.json("Add project");
});
