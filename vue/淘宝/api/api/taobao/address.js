var express = require('express');
var router = express.Router();
var Unique = require("../common/Unique")
var CreatTime = require("../common/creatTime")
var {
  sqlHandle,  // 更改
  readHandle,  //读取操作
  searchHandle,  //检测有无某条数据，有为false
  searchHandleNormal,  //检测有无某条数据，有为true
  query             // //基本操作
} = require("../../config/db_connect")

// 获取全部地址
router.get("/getAddress", (req, res, next) => {
  let getAddress = `select * from address`
  readHandle(getAddress).then((data) => {
    res.send(data)
  })
})


// 添加地址
router.post("/addAddress", (req, res, next) => {
  let { names, address, defaults, phones } = req.body
  if (names && address && defaults && phones) {
    if (defaults != "1") {
      let getAddress = `select * from address`
      let insertAddress = `insert into address (id,names,address,defaults,phones) values ('${Unique()}','${names}','${address}','${defaults}','${phones}')`
      async function sqlAllHandle() {
        await sqlHandle(insertAddress);
        let data = await readHandle(getAddress)
        let updateDefaults = `update address set defaults='1' where id='${data[0].id}'`
        if (data.length == 1) {
          await sqlHandle(updateDefaults)
        }
        return {
          code: "1001",
          msg: "插入地址成功！"
        }
      }
      sqlAllHandle().then((data) => {
        res.send(data)
      }).catch((err) => {
        res.send({
          code: "1002",
          msg: "插入地址失败！"
        })
      })
    }
    else if (defaults == "1") {
      let getAddress = `select * from address`
      let updateDefaults = `update address set defaults='0'`
      let insertAddress = `insert into address (id,names,address,defaults,phones) values ('${Unique()}','${names}','${address}','${defaults}','${phones}')`
      async function sqlAllHandle() {
        let data = await readHandle(getAddress)
        if (data.length > 0) {
          await sqlHandle(updateDefaults)
        }
        await sqlHandle(insertAddress);
        return {
          code: "1001",
          msg: "插入地址成功！"
        }
      }
      sqlAllHandle().then((data) => {
        res.send(data)
      }).catch((err) => {
        res.send({
          code: "1002",
          msg: "插入地址失败！"
        })
      })
    }
  }
  else {
    res.send({
      code: "1000",
      msg: "数据传入不正确"
    })
  }

})

// 改变地址默认
router.post("/changeAddress", (req, res, next) => {
  let { id } = req.body
  if (id) {
    let updateDefaults = `update address set defaults='0'`
    let updateAddress = `update address set defaults='1' where id='${id}'`
    async function sqlAllHandle() {
      await sqlHandle(updateDefaults);
      await sqlHandle(updateAddress);
      return {
        code: "2001",
        msg: "改变默认成功！"
      }
    }
    sqlAllHandle().then((data) => {
      res.send(data)
    }).catch((err) => {
      res.send({
        code: "2002",
        msg: "改变默认失败！"
      })
    })
  }
  else {
    res.send({
      code: "2000",
      msg: "数据传入不正确"
    })
  }
})


// 根据id获取地址
router.post("/getIdAddress", (req, res, next) => {
  let { id } = req.body
  let getAddress = `select * from address where id='${id}'`
  readHandle(getAddress).then((data) => {
    res.send(data)
  })
})

// 改变地址
router.post("/changeIdAddress", (req, res, next) => {
  let { id, names, address, phones } = req.body
  if (id && names && address && phones) {
    let changeIdAddress = `update address set names='${names}',address='${address}',phones='${phones}' where id='${id}'`
    async function sqlAllHandle() {
      await sqlHandle(changeIdAddress);
      return {
        code: "3001",
        msg: "改变地址成功！"
      }
    }
    sqlAllHandle().then((data) => {
      res.send(data)
    }).catch((err) => {
      res.send({
        code: "3002",
        msg: "改变地址失败！"
      })
    })
  }
  else {
    res.send({
      code: "3000",
      msg: "数据传入不正确"
    })
  }
})

// 根据id删除地址
router.post("/delAddress", (req, res, next) => {
  let { id } = req.body
  let delAddress = `delete from address where id='${id}'`
  let getAddress = `select * from address`
  async function sqlAllHandle() {
    await sqlHandle(delAddress)
    let data = await readHandle(getAddress)
    let updateDefaults = `update address set defaults='1' where id='${data[0].id}'`
    // 判断没有默认的时候，他就不给第一个变为默认
    let getDefaults = `select * from address where defaults='1'`
    await searchHandle(getDefaults)

    await sqlHandle(updateDefaults)
    return {
      code: "4001",
      msg: "删除成功！"
    }
  }
  sqlAllHandle().then((data) => {
    res.send(data)
  }).catch((err) => {
    res.send({
      code: "4001",
      msg: "删除成功！"
    })
  })
})


module.exports = router