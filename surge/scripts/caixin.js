/***********************************

> 应用名称：财新
> 软件版本：7.9.7
> 下载地址：https://apps.apple.com/us/app/id356023612
> 脚本作者：Cuttlefish
> 微信账号：墨鱼手记
> 更新时间：2022-10-17
> 通知频道：https://t.me/ddgksf2021
> 投稿助手：https://t.me/ddgksf2013_bot
> 问题反馈：📮 ddgksf2013@163.com 📮
> 使用说明：解锁文章，无需登录，请低调使用
> 特别说明：⛔⛔⛔
            本脚本仅供学习交流使用，禁止转载、售卖
            ⛔⛔⛔



[rewrite_local]

# ～ 财新（2022-10-17）@ddgksf2013
^https?:\/\/gateway\.caixin\.com\/api\/app\-api\/auth\/(validate|validateAudioAuth) url script-request-header https://github.com/ddgksf2013/Cuttlefish/raw/master/Crack/caixin.js

[mitm]

hostname=gateway.caixin.com

***********************************/


















const url = $request.url.replace(/uid=(\d+|)/g,"uid=12622061")
            .replace(/code=(\w+|)/g,"code=BB1F6E9C759991C1DAD418A7E8C6509E")
            .replace(/device=(\w+|)/g,"device=af491839f424cf75f07d7f4d6b7a30bde3296ea2")
            .replace(/deviceType=(\d+|)/g,"deviceType=1");
if($request['url']['indexOf']('validateAudioAuth')!=-0x1){
            header['appinfo']='dd';
}
$done({'url':url,'headers':header});
