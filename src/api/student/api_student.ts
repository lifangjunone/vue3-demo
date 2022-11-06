import axios from "../request"
import { testType } from "../models";
//请求示例
//get
export const student = (data:any) => {
    return axios({
        url: "/api/example_api/user",
        method: "get",
        data,
        config: {
            headers: {
                'Content-Type': 'wechat'
            },
            timeout: 10000
        }
    })
}