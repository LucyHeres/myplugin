cordova.define("cordova-plugin-myplugin.myplugin",
    function(require, exports, module) {

        var exec = require("cordova/exec");
    var myplugin={
            toast: function(content){
                exec(null,null,"myplugin","toast",[content]);
            }
        };
        module.exports = myplugin;
});
