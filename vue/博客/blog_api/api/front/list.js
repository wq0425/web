var express = require('express');
var router = express.Router();
var hasOwnProperty = require('has-own-property-x'); //支持hasOwnProperty

var Unique = require("../common/Unique"); // 生成唯一标识
var CreatTime = require("../common/creatTime"); // 创建 nodejs 可以识别的 时间

var {
    sqlHandle,  //除查询外的其他操作
    readHandle,  //读取操作
    searchHandle,  //检测有无某条数据，有为false
    searchHandleNormal,  //检测有无某条数据，有为true
    query             //基本操作
} = require("../../config/db_connect");


// 获取文章列表
router.get("/getArticleList", (req, res, next) => {
    let selectOne = `select * from one_class`
    readHandle(selectOne).then((data) => {
        let arr = []
        let all = []
        data.forEach((v, i) => {
            var getArticleList = `select * from ${v.enname}`
            readHandle(getArticleList).then((data1) => {
                data1.forEach((c, d) => {
                    c.cnname_one = v.cnname
                })
                if (data1.length > 0) {
                    arr.push(data1)
                }
                else {
                    arr.push("")
                }
                if (data.length == arr.length) {
                    arr.forEach((a, b) => {
                        if (a) {
                            a.forEach((val, ind) => {
                                all.push(val)
                            })
                        }
                    })
                    res.send(all)
                }
            });
        })
    })
})

// 获取一级二级分类
router.get("/getClass", (req, res, next) => {
    let getOneClass = `select * from one_class`
    let getTwoClass = `select * from two_class`
    let arr = []
    readHandle(getOneClass).then((data) => {
        readHandle(getTwoClass).then((data1) => {
            data.forEach((v, i) => {
                let arr1 = []
                data1.forEach((val, ind) => {
                    if (v.id == val.parent_id) {
                        arr1.push(val)
                    }
                })
                arr.push({
                    one: v,
                    two: arr1
                })
            })
            res.send(arr)
        })
    })
})


module.exports = router;