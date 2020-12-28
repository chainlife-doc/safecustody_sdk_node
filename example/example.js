//这里是sdk参考使用方法
//这里示例代码有些错误的处理比较简单,仅供参考!!!
//嵌入到业务上面请严格判断错误和异常
//使用sdk,提币不需要主动签名(sign字段)加密,内部已做处理
//使用sdk,验证身份(token字段)不需要主动签名加密,内部已做处理
//使用案例请认真阅读开发文档,因为有些字段是选填的,案例中并没有体现出来

SDK = require("../sdk")
var config = {
    "userid": "26",//对应商户后台的商户id
    "appid": "",//对应商户后台的APPID
    "secretKey": "",//对应商户后台的SECRETKEY
    "apiKey": "",//对应商户后台的APIKEY
    "host": "",//TODO 请向微信群的官方人员获取
}

sdk = new SDK()
sdk.setConfig(config)

//单币种查询
sdk.QueryCoinConf("btc").then(function (data) {
    console.log(data.data)
})

//查询币种全部信息
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

//取消提币接口
sdk.WithdrawCancel(subuserId = "1", chain = "trx", coin = "trx", withdrawid = "").then(function (data) {
    console.log(data.data)
})