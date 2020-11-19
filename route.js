Request = require("./req")
User = require("./user")

class Route {

    user = undefined
    host = ""

    constructor() {
        this.user = new User()
    }

    setHost(host) {
        this.host = host
    }


    //单个币种查询
    QueryCoinConf(coin) {
        let p = {"coin": coin}
        return Request.request(this.host + "coinconf.php", p, this.user)
    }

    //查询币种公共信息
    QueryCoins() {
        return Request.request(this.host + "info.php", "", this.user)
    }

    //查询余额
    QueryBalance(param) {
        let p = {"coins": param}
        return Request.request(this.host + "balance.php", p, this.user)
    }

    //获取充值地址
    GetDepositAddr(param) {
        let p = {"coins": param}
        return Request.request(this.host + "deposit/addr.php", p, this.user)
    }

    //获取充值记录
    GetDepositHistory(subuserId, chain, coin, fromId = 0, limit = 100) {
        let p = {
            "subuserid": subuserId,
            "chain": chain,
            "coin": coin,
            "fromid": fromId,
            "limit": limit,
        }
        return Request.request(this.host + "deposit/history.php", p, this.user)
    }

    //内部地址查询
    QueryIsInternalAddr(coin, chain, addr) {
        let p = {
            "chain": chain,
            "coin": coin,
            "addr": addr
        }
        return Request.request(this.host + "internal-addr/query.php", p, this.user)
    }

    //提交提币工单
    SubmitWithdraw(subuserid, chain, coin, addr, amount, memo = "", usertags = "") {
        let p = {
            "subuserid": subuserid,
            "chain": chain,
            "coin": coin,
            "addr": addr,
            "amount": amount,
            "memo": memo,
            "usertags": usertags,
            "sign": this.user.getSign(addr, memo, usertags),
        }
        return Request.request(this.host + "withdraw/submit.php", p, this.user)
    }

    //提币预校验接口
    ValidateWithdraw(subuserid, chain, coin, addr, amount, memo = "", usertags = "") {
        let p = {
            "subuserid": subuserid,
            "chain": chain,
            "coin": coin,
            "addr": addr,
            "amount": amount,
            "memo": memo,
            "usertags": usertags,
            "sign": this.user.getSign(addr, memo, usertags),
        }
        return Request.request(this.host + "withdraw/validator.php", p, this.user)
    }

    //查询提币工单状态
    QueryWithdrawStatus(coin, chain, withdrawid) {
        let p = {
            "chain": chain,
            "coin": coin,
            "withdrawid": withdrawid,
        }
        return Request.request(this.host + "withdraw/status.php", p, this.user)
    }

    //查询提币记录
    QueryWithdrawHistory(subuserId, chain, coin, fromId = 0, limit = 100) {
        let p = {
            "subuserid": subuserId,
            "chain": chain,
            "coin": coin,
            "fromid": fromId,
            "limit": limit,
        }
        return Request.request(this.host + "withdraw/history.php", p, this.user)
    }
}

module.exports = Route