const btn = document.getElementById('themeBtn')
const root= document.documentElement
const saved = localStorage.getItem('theme')
if (saved === 'light') root.classList.add('light-mode')

const setTheme = (light) => {
    if(light){
        document.documentElement.style.setProperty('--bg', '#f7fbff');
        document.documentElement.style.setProperty('--card', '#fff');
        document.documentElement.style.setProperty('--muted', '#475569');
        document.documentElement.style.setProperty('--text', '#071124');
        btn.setAttribute('aria-pressed', 'true')
        localStorage.setItem('theme', 'light')
    }else{
        document.documentElement.style.setProperty('--bg', '#0f1724');
        document.documentElement.style.setProperty('--card', '#0b1220');
        document.documentElement.style.setProperty('--muted', '#94a3b8');
        document.documentElement.style.setProperty('--text', '#e6eef8');
        btn.setAttribute('aria-pressed', 'false')
        localStorage.setItem('theme', 'dark')
    }
}

(function initTheme(){
    if(saved) setTheme(saved === 'light');
    else setTheme(window.matchMedia && window.matchMedia('(prefers-color-scheme:light)').matches)
})()

btn.addEventListener('click', ()=>{
    const isLight = localStorage.getItem('theme') === 'light'
    setTheme(!isLight)
})

document.addEventListener('keyup', e => {
    if(e.key === 'Tab') document.body.style.scrollBehavior = 'smooth'
})