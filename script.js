 async function openCamera(){
    const stream = await navigator.mediaDevices.getUserMedia({video:true});
    video.srcObject = stream;
 }