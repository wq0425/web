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


// 插入文档
router.post("/addApi", (req, res, next) => {
  let { backorfont, getparams, sendparams, title, type, url } = req.body
  if (backorfont && getparams && sendparams && title && type && url) {
    var addApi = `insert into apilist(id,title,type,url,sendparams,getparams,backorfont,time) values('${Unique()}','${title}','${type}','${url}','${sendparams}','${getparams}','${backorfont}','${CreatTime()}')`
    async function sqlAllHandle() {
      await sqlHandle(addApi);
      return {
        code: "4001",
        msg: "插入文档成功！"
      }
    }
    sqlAllHandle().then((data) => {
      res.send(data)
    }).catch((err) => {
      res.send({
        code: "4002",
        msg: "插入失败！"
      })
    })
  }
  else {
    res.send({
      code: "4000",
      msg: "数据传入不正确！请检测传入的数据"
    })
  }
})

// 查找文档数据
router.post("/selectApi", (req, res, next) => {
  let backorfont = req.body.backorfont
  if (backorfont == "back") {
    let selectApi = `select * from apilist where backorfont='${backorfont}'`
    readHandle(selectApi).then((data) => {
      res.send(data)
    })
  }
  else if (backorfont == "font") {
    let selectApi = `select * from apilist where backorfont='${backorfont}'`
    readHandle(selectApi).then((data) => {
      res.send(data)
    })
  }
})

// 删除文档数据
router.post("/deleteApi", (req, res, next) => {
  let id = req.body.id
  let deleteApi = `delete from apilist where id='${id}'`
  readHandle(deleteApi).then((data) => {
    res.send({
      code: "4011",
      msg: "删除成功！"
    })
  })
})

// 更改文档
router.post("/updateApi", (req, res, next) => {
  let { backorfont, getparams, sendparams, title, type, url, id } = req.body
  if (backorfont && getparams && sendparams && title && type && url && id) {
    var updateApi = `update apilist set time='${CreatTime()}',backorfont='${backorfont}',getparams='${getparams}',sendparams='${sendparams}',title='${title}',type='${type}',url='${url}' where id='${id}'`
    async function sqlAllHandle() {
      await sqlHandle(updateApi);
      return {
        code: "4021",
        msg: "更改文档成功！"
      }
    }
    sqlAllHandle().then((data) => {
      res.send(data)
    }).catch((err) => {
      res.send({
        code: "4022",
        msg: "更改文档失败！"
      })
    })
  }
  else {
    res.send({
      code: "4020",
      msg: "数据传入不正确！请检测传入的数据"
    })
  }
})



module.exports = router