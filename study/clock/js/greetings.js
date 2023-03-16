const greeting = document.querySelector("#greeting")
const logOut = document.querySelector("#logOut")

const loginForm = document.querySelector("#login_form")
const loginInput = document.querySelector("#login_form input:first-child")

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

function init() {
    const savedUsername = localStorage.getItem(USERNAME_KEY);

    if (savedUsername === null) {
        loginForm.classList.remove(HIDDEN_CLASSNAME);
        loginForm.addEventListener("submit", onLoginSubmit)
    }

    else {
        paintGreetings(savedUsername);
    }

}

// 첫 로그인 때(로컬 스토리지의 USERNAME_KEY가 null)에 작동
function onLoginSubmit(event) {
    event.preventDefault(); // 브라우저의 기본동작(새로고침) 중지
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username); // USERNAME_KEY를 set해줌
    paintGreetings(username);
}



// 그 이외의 상황에서 작동
function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`
    loginAfterToggle();
    greeting.classList.remove(HIDDEN_CLASSNAME);
    logOut.classList.remove(HIDDEN_CLASSNAME);

    logOut.addEventListener("click", function () {
        localStorage.removeItem(USERNAME_KEY);

        greeting.classList.add(HIDDEN_CLASSNAME);
        logOut.classList.add(HIDDEN_CLASSNAME);

        init();
    })
}

init();

