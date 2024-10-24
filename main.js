let counterStart = 0;
let counter = document.getElementById("conunter");

counter.innerText = counterStart;

const handleIncrement=()=>{
    counterStart= counterStart +1;
    counter.innerText = counterStart;
}
const handleDecrement=()=>{
    counterStart= counterStart -1;
    counter.innerText = counterStart;
}

