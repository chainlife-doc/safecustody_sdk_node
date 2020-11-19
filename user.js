class User {

    /**
     * @var string
     */
    appid;

    /**
     * @var string
     */
    userId;

    /**
     * @var string
     */
    salt;

    /**
     * @var number
     */
    times;


    /**
     * 设置用户
     * @param userid
     */
    setUserId(userid) {
        this.userId = userid
    };


    /**
     * 设置appid
     * @param appid
     */
    setAppid(appid) {
        this.appid = appid
    };


    /**
     * 设置salt
     * @param salt
     */
    setSalt(salt) {
        this.salt = salt
    };


    /**
     * 获取用户当前时间
     * @returns {number|null}
     */

    getTime() {
        if (this.times === undefined || this.times === "" || this.times == null) {
            this.times = Date.now();
        }
        return parseInt(this.times/1000)
    };


    /**
     * 销毁时间
     */
    unsetTime() {
        this.times = null
    }


    getToken() {
        return this.Md5(this.appid + "_" + this.salt + "_" + this.userId + "_" + this.getTime())
    }


    getSign(addr, memo = "", usertags = "") {
        return this.Md5(this.appid + "_" + this.salt + "_" + this.userId + "_" + this.getTime() + "_" + addr + "_" + memo + "_" + usertags)
    }


    Md5(text) {
        var crypto = require('crypto');
        return crypto.createHash('md5').update(text, 'utf8').digest('hex');
    }
}

module.exports = User