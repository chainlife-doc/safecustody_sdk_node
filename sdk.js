Route = require("./route")
class Sdk extends Route {

    config = ["userid", "appid", "secretKey", "host","apiKey"]

    setConfig(config) {
        var key
        for (key in this.config) {
            if (config[this.config[key]] == "" || config[this.config[key]] == undefined || config[this.config[key]] == null) {
                return false, "请输入" + key
            }
        }
        this.user.setAppid(config["appid"])
        this.user.setUserId(config["userid"])
        this.user.setSecretKey(config["secretKey"])
        this.user.setApiKey(config["apiKey"])
        this.setHost(config["host"])
    }
}

module.exports = Sdk