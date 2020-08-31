$(document).ready(function () {
    fetch("/logo/flamincome").then(resp => {
        resp.text().then(logo => {
            let welcome = document.createElement('div')
            let welcome_header = document.createElement('p')
            let welcome_logo = document.createElement('pre')
            let welcome_footer = document.createElement('p')
            welcome_header.style.textAlign = 'center'
            welcome_logo.style.textAlign = 'center'
            welcome_footer.style.textAlign = 'center'
            welcome_header.innerHTML = 'welcome to <b>flamincome</b>'
            welcome_logo.innerText = logo
            welcome_footer.innerHTML = 'coolest (most profitable) <a href="https://flamingo.finance">flamingo</a> farmer, type <b>tutorial</b> to get start<br><b>USE AT YOUR OWN RISK!!!</b>'
            welcome.appendChild(welcome_header)
            welcome.appendChild(welcome_logo)
            welcome.appendChild(welcome_footer)

            let $ptty = $('#terminal').Ptty({
                i18n: {
                    welcome: welcome.outerHTML,
                }
            });
            $ptty.register('command', {
                name: 'flamincome',
                method: function (cmd) {
                    let div = document.createElement('div')
                    let pre = document.createElement('pre')
                    let p = document.createElement('p')
                    let args = $ptty.get_command_option('last').split(' ')
                    args.shift()
                    p.innerText = args.join(' ');
                    pre.innerText = logo
                    pre.style.backgroundColor = 'transparent'
                    pre.style.border = '0px'
                    div.style.justifyContent = 'center'
                    div.style.alignItems = 'center'
                    div.style.display = 'flex'
                    div.style.backgroundColor = 'rgba(0,0,0,0.9)'
                    div.style.border = '1px solid rgba(255,255,255,0.15)'
                    p.style.color = '#b5e853'
                    div.appendChild(pre)
                    div.appendChild(p)
                    return {
                        out: div.outerHTML,
                    };
                },
                help: 'flamincome can speak (example: `flamincome I want $!`)'
            });
            $ptty.register('command', {
                name: 'github',
                method: function (cmd) {
                    return {
                        out: '<a href="https://github.com/flamincome">Flamincome Github</a>',
                    };
                },
                help: 'flamincome github page'
            });
            $ptty.register('command', {
                name: 'tutorial',
                method: function (cmd) {
                    let content = document.createElement('div')
                    content.innerHTML += '<p>farm on <a href="https://flamingo.finance">flamingo</a>, earn profits</p>'
                    content.innerHTML += '<p>decentralized asset manager who never lose $1</p>'
                    content.innerHTML += '<p><br></p>'
                    content.innerHTML += '<p>we are nobody but we are the most professional farmers on <a href="https://flamingo.finance">flamingo</a></p>'
                    content.innerHTML += '<p>want to earn more, then use <b>flamincome</b></p>'
                    content.innerHTML += '<p><br></p>'
                    content.innerHTML += '<p>the project is under developing (because <a href="https://flamingo.finance">flamingo</a> is also under developing) but we will be ready once <a href="https://flamingo.finance">flamingo</a> is ready</p>'
                    content.innerHTML += '<p><br></p>'
                    content.innerHTML += '<p>follow our <a href="https://github.com/flamincome">github</a> for more news and events</p>'
                    content.innerHTML += '<p><br></p>'
                    content.innerHTML += '<p>type <b>help</b> to see more command to use</p>'
                    return {
                        out: content.outerHTML,
                    };
                },
                help: 'flamincome github page'
            });
        })
    })
});