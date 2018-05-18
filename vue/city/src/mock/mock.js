import axios from "axios"
import axiosMockAdapter from "axios-mock-adapter"
import cityArr from "../data/city"
import { provinceArr, citys } from "../data/provinceCity"
import shopcardata from "../data/shopcarData"

let mock = new axiosMockAdapter(axios)

let mockData = () => {
    mock.onGet("/api/citydata")
        .reply((config) => {
            return new Promise((resolve, reject) => {
                resolve([200, cityArr])
            })
        })
    mock.onGet("/api/bigcitydata")
        .reply((config) => {
            return new Promise((resolve, reject) => {
                resolve([200, [provinceArr, citys]])
            })
        })
    mock.onGet("/api/shopcardata")
        .reply((config) => {
            return new Promise((resolve, reject) => {
                resolve([200, shopcardata])
            })
        })
}

export default mockData