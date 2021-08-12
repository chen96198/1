/*
吾爱破解签到脚本
更新时间: 2020.11.11
脚本兼容: QuantumultX, Surge, Loon, Node.js
电报频道: @NobyDa
问题反馈: @NobyDa_bot
************************
QX, Surge, Loon说明：
************************
手动登录 https://www.52pojie.cn/home.php 如通知成功获取cookie, 则可以使用此签到脚本.
获取Cookie后, 请将Cookie脚本禁用并移除主机名, 以免产生不必要的MITM.
脚本将在每天上午9点执行, 您可以修改执行时间.
************************
Node.js说明: 
************************
需自行安装"got"与"tough-cookie"模块. 例: npm install got tough-cookie -g
抓取Cookie说明:
浏览器打开 https://www.52pojie.cn/home.php 登录账号后, 开启抓包软件并刷新页面.
抓取该URL请求头下的Cookie字段, 填入以下CookieWA的单引号内即可. */

const CookieWA = '';

/***********************
Surge 4.2.0+ 脚本配置:
************************
[Script]
吾爱签到 = type=cron,cronexp=0 9 * * *,script-path=https://raw.githubusercontent.com/NobyDa/Script/master/52pojie-DailyBonus/52pojie.js
吾爱获取Cookie = type=http-request,pattern=https:\/\/www\.52pojie\.cn\/home\.php\?,script-path=https://raw.githubusercontent.com/NobyDa/Script/master/52pojie-DailyBonus/52pojie.js
[MITM] 
hostname= www.52pojie.cn
************************
QuantumultX 远程脚本配置:
************************
[task_local]
# 吾爱签到
0 9 * * * https://raw.githubusercontent.com/NobyDa/Script/master/52pojie-DailyBonus/52pojie.js
[rewrite_local]
# 获取Cookie
https:\/\/www\.52pojie\.cn\/home\.php\? url script-request-header https://raw.githubusercontent.com/NobyDa/Script/master/52pojie-DailyBonus/52pojie.js
[mitm] 
hostname= www.52pojie.cn
************************
Loon 2.1.0+ 脚本配置:
************************
[Script]
# 吾爱签到
cron "0 9 * * *" script-path=https://raw.githubusercontent.com/NobyDa/Script/master/52pojie-DailyBonus/52pojie.js
# 获取Cookie
http-request https:\/\/www\.52pojie\.cn\/home\.php\? script-path=https://raw.githubusercontent.com/NobyDa/Script/master/52pojie-DailyBonus/52pojie.js
[Mitm] 
hostname= www.52pojie.cn
*/

var $ = new Env('');
var date = new Date()
if (typeof $request != "undefined") {
  GetCookie()
} else {
  checkin()
}

function checkin() {
  $.get({
    url: 'https://www.52pojie.cn/home.php?mod=task&do=apply&id=2&mobile=no',
    headers: {
      Cookie: CookieWA || $.getdata("CookieWA"),
