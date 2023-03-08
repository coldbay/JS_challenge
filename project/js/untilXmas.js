const clock = document.querySelector("#deadline");

function cal(){
    const date = new Date();

    const xmasDate = new Date(`${date.getFullYear()}-12-25 00:00:00`);
    const gap = xmasDate.getTime() - date.getTime(); //밀리초 기준

    const days = Math.floor(gap / (1000*60*60*24)); // 1초 1분 1시간 1일

    const hours = Math.floor(gap % (1000*60*60*24) / (1000*60*60)); // 일의 나머지값 / 시간단위
    const minutes = Math.floor(gap % (1000*60*60) / (1000*60));
    const seconds = Math.floor(gap % (1000*60) / (1000));

    clock.innerText= `${days}일 ${hours < 10 ? `0${hours}`: hours} : ${minutes < 10 ? `0${minutes}` : minutes} : ${seconds < 10 ? `0${seconds}`: seconds}`;
}


cal()
setInterval(cal, 1000);