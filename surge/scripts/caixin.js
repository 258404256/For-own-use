var XMG1=$request['headers'];
const url = $request.url.replace(/uid=(\d+|)/g,"uid=12622061")
            .replace(/code=(\w+|)/g,"code=BB1F6E9C759991C1DAD418A7E8C6509E")
            .replace(/device=(\w+|)/g,"device=af491839f424cf75f07d7f4d6b7a30bde3296ea2")
            .replace(/deviceType=(\d+|)/g,"deviceType=1");
if($request['url']['indexOf']('validateAudioAuth')!=-0x1){
    XMG1['appinfo']='dd';
}
$done({'url':url,'headers':XMG1});
