cordova.define("myplugin.myplugin",
    function(require, exports, module) {

        /*
         * 实现方式一
        */
        var exec = require("cordova/exec");
        module.exports = {
            toast: function(content){
                exec(null,null,"myplugin","toast",[content]);
            },
            toastWithCallback: function (content, successCallback, errorCallback) {
                cordova.exec(successCallback, errorCallback, "myplugin", "toastWithCallback", [content]);
            }
        }
});