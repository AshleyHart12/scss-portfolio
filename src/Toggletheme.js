

function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

function keepTheme() {
    if (localStorage.getItem('theme')) {
        if(localStorage.getItem('theme') === 'theme-muted') {
            setTheme('theme-muted');
        } else if (localStorage.getItem('theme') === 'theme-bright') {
            setTheme('theme-bright')
        }
    } else {
        setTheme('theme-muted')
    }
}

module.exports = {
    setTheme,
    keepTheme
}