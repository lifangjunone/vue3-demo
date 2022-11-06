import axios from "./request"
import { testType } from "./models";
//请求示例
//get
export const login1 = (data:any) => {
    return axios({
        url: "/api/xxxx",
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
//post
export async function login2<testType>(data: any) {
    return await axios({
        url: "/api/rp_manage/login",
        method: "post",
        data,
        config: {
            headers: {
                'Request-Type': 'application/json'
            },
            timeout: 10000
        }
    })
}
// export const login2<T extends Record<string, any>> = (data:any) => {
//     return axios({
//         url: "/api/rp_manage/login",
//         method: "post",
//         data,
//         config: {
//             headers: {
//                 'Request-Type': 'application/json'
//             },
//             timeout: 10000
//         }
//     })
// }
