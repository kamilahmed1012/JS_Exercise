// Exercise - 05 : Hacker-man

const scriptLines = [
    "Initialinzing hacking program...",
    "Hacking Asad Username...",
    "Username found Asad10",
    "Connecting to Facebook..."
];

const sleep = function(ms) {
    return new Promise(r => setTimeout(r, ms))
}

const typeLine = async function(targetEl, text, minDelay = 14, maxDelay = 40){
    for(const ch of text){
        targetEl.textContent += ch;
        const d =Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;
        await sleep(d)
        // targetEl.parantElement.scrollTop = targetEl.parantElement.scrollHeight;
    }
    targetEl.textContent += '\n'
}

async function runHack() {
    const screen = document.getElementById('screen')
    const cursor = document.createElement('span')
    cursor.className = 'cursor'
    screen.appendChild(cursor)
    await sleep(300)

    for (const line  of scriptLines){
        cursor.remove()
        await typeLine(screen, line)
        screen.appendChild(cursor)
        await sleep(350 + Math.random() * 500)
    }
  screen.appendChild(cursor)  
}

function clearScreen(){
    const screen = document.getElementById('screen')
    screen.textContent = ''
}

document.getElementById('runBtn').addEventListener('click', async ()=>{
    clearScreen()
    await runHack();
})

document.getElementById('clearBtn').addEventListener('click', clearScreen)

window.addEventListener('DOMContentLoaded', runHack)