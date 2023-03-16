const clock = document.querySelector("#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0") //padStart(length,x) string의 길이가 length만큼 될 때까지 앞에 X를 추가 
    const minutes = String(date.getMinutes()).padStart(2, "0")
    const seconds = String(date.getSeconds()).padStart(2, "0")

    clock.innerText = `${hours} : ${minutes} : ${seconds}`
    //간단한 방식 new Date().toLocaleTimestring() 13시 -> PM 1시로 표현
}

getClock();
setInterval(getClock, 1000); // x초 뒤에 시작 후 매 x초마다