import axios from "../request"
import { testType } from "../models";
import { json } from "stream/consumers";
import { dataType } from "element-plus/es/components/table-v2/src/common";
// 获取学生列表
// get
export const studentGet = (data:any) => {
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
// 创建学生
// post
export const studentPost = (data:any) => {
    return axios({
        url: "/api/example_api/user",
        method: "post",
        data,
        config: {
            headers: {
                'Content-Type': 'wechat'
            },
            timeout: 10000
        }
    })
}

// 编辑学生
// put
export const studentPut = (data:any) => {
    return axios({
        url: "/api/example_api/user",
        method: "put",
        data,
        config: {
            headers: {
                'Content-Type': 'wechat'
            },
            timeout: 10000
        }
    })
}

// 删除学生
// delete
export const studentDelete = (data:JSON) => {
    return axios({
        url: "/api/example_api/user",
        method: "delete",
        data,
        config: {
            headers: {
                'Request-Type': 'application/json'
            },
            timeout: 10000
        }
    })
}