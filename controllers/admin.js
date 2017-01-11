var BaseController = require("./base"),
    View = require("../views/base");
module.exports = BaseController.extend({ 
    name: "Admin",
    run: function(req, res, next) {
        var v = new View(res, 'index');
        console.log('back to code love to code');
        v.render({
            title: 'Administration',
            content: 'Welcome to the control panel'
        });
    }
});