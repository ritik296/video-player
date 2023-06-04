
var URL = window.URL || window.webkitURL;
async function main(streamUrl){
    console.log("main");
    var video = document.getElementById('video');
    var blob = await fetch(streamUrl).then(r => r.blob());
    console.log(blob);
    var url = URL.createObjectURL(blob);
    video.src = url;
}
main('http://127.0.0.1:5500/video1.mp4');