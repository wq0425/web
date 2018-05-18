module.exports = function (Vue) {
    (function (Vue) {
        Vue.prototype.bus = new Vue()
    })(Vue)
}