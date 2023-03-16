const quotes = [
    {
        quote: "돌다리도 두들겨 보고 건너라",
        author: "한국 속담"
    },
    {
        quote: "과거는 기록 그 이상의 가치는 없으며, 현재는 진행중이다.",
        author: "Bong"
    },
    {
        quote: "방향을 잃은 미로 속에서도 한 발자국 내딛어야 도착할 수 있다",
        author: "Gozaru"
    }
]

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")


const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = randomQuote.quote
author.innerText = randomQuote.author

