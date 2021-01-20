/*
 * @Descripttion:
 * @version: 版本号
 * @Author:
 * @Date: 2020-05-11 15:08:59
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-10-13 15:23:10
 */

//API访问超时时长
let apiTimeOut = 2 * 60 * 1000;

//默认主题
let defaultTheme = 'light_skin';

//版权名称
let copyright_name = '版权所有©2020';

//项目名称
let project_name = "工商税务信息检索系统";

//公司名称
let copyright_company_name = '成都市龙潭新经济产业功能区管委会';

//logo处版本号
let logo_version = 'R1.6.8';

//数据门户访问地址地址
let door_url = 'http://192.168.12.90:8087';

/*-----------------------下面是接口模块地址--------------------------*/

//项目token，无登录token的时候使用这个
let projectToken = 'Basic Z292ZXJuOjEyMzQ1Ng==';

let url_prefix = {
    //用户接口前缀
    user_preifx: "/zycx_bussiness/user",
    //权限接口前缀
    oauth_preifx: "/zycx_bussiness/login",
    //文件操作前缀
    file_preifx: "/zycx_bussiness/taxReport",
    //日志前缀
    log_preifx: "/zycx_bussiness/log",
};
Object.freeze(url_prefix);

let baseUrl = {
    //用户权限地址
    user_baseUrl: 'http://yeyugou.xicp.io',
    //用户权限地址
    oauth_baseUrl: 'http://yeyugou.xicp.io',
    //用户权限地址
    file_baseUrl: 'http://yeyugou.xicp.io',
    //用户权限地址
    log_baseUrl: 'http://yeyugou.xicp.io',
};

//为了开发dev模式的时候，也可以引用该文件，而不用再webpack.dev.conf.js里面去重新配置一套
try {
    module.exports = {
        config: {
            url_prefix,
            baseUrl
        }
    };
} catch (e) {

}
