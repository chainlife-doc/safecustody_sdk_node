SDK = require("../sdk")
var config = {
    "userid": "26",
    "appid": "",
    "salt": "",
    "host": "",
}

sdk = new SDK()
sdk.setConfig(config)

//单币种查询
sdk.QueryCoinConf("btc").then(function (data) {
    console.log(data.data)
})

//查询币种公共信息
sdk.QueryCoins().then(function (data) {
    console.log(data.data)
})

// 查询余额
sdk.QueryBalance([{"chain": "eth", "coin": "usdt"}]).then(function (data) {
    console.log(data.data)
})

//获取充值地址
sdk.GetDepositAddr([{"chain": "trx", "coin": "trx", "subuserid": "1"}]).then(function (data) {
    console.log(data.data)
})

//获取充值记录
sdk.GetDepositHistory(subuserId = "1", chain = "trx", coin = "trx", fromId = 0, limit = 100).then(function (data) {
    console.log(data.data)
})

//内部地址查询
sdk.QueryIsInternalAddr(coin = "trx", chain = "trx", addr = "").then(function (data) {
    console.log(data.data)
})

//提交提币工单
sdk.SubmitWithdraw(subuserid = "1", chain = "trx", coin = "trx", addr = "", amount = "1", memo = "中国", usertags = "深圳").then(function (data) {
    console.log(data.data)
})

//提币预校验接口
sdk.ValidateWithdraw(subuserid = "1", chain = "trx", coin = "trx", addr = "", amount = "1", memo = "中国", usertags = "深圳").then(function (data) {
    console.log(data.data)
})

// 查询提币工单状态
sdk.QueryWithdrawStatus(coin = "trx", chain = "trx", withdrawid = "").then(function (data) {
    console.log(data.data)
})

//查询提币记录
sdk.QueryWithdrawHistory(subuserId = "1", chain = "trx", coin = "trx", fromId = 0, limit = 100).then(function (data) {
    console.log(data.data)
})