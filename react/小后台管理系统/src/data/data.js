let count = 50
let arr = []

for (var i = 0; i < count; i++) {
    arr.push(
        { nam: "计量检测系统", child: "机房", renwu: "图纸", time1: Math.ceil(Math.random() * 9), time2: Math.ceil(Math.random() * 9), jindu: Math.ceil(Math.random() * 100) },
        { nam: "大数据平台", child: "机房", renwu: "清单", time1: Math.ceil(Math.random() * 9), time2: Math.ceil(Math.random() * 9), jindu: Math.ceil(Math.random() * 100) },
        { nam: "计量检测系统", child: "机房", renwu: "清单", time1: Math.ceil(Math.random() * 9), time2: Math.ceil(Math.random() * 9), jindu: Math.ceil(Math.random() * 100) },
    )
}

export default arr