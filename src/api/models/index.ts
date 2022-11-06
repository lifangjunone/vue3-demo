/** @说明 ： 此文件设计为接口返回类型声明文件 后台接口返回 情话类型 */
// export type qinghuaType = string;  // 说明，情话  --  这个接口 ，返回的数据类型确定时字符串类型

/** 例如 其他数据返回格式 也可以这样定义 */
export interface testType {
	code:number;
	data:object;	// Array<string> 也可
	msg:string;
	// ...
}
