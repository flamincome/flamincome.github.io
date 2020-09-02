$(document).ready(function () {
    let welcome = document.createElement('div')
    let welcome_header = document.createElement('p')
    let welcome_logo = document.createElement('pre')
    let welcome_footer = document.createElement('p')
    welcome_header.id = 'welcome_header'
    welcome_logo.id = 'welcome_logo'
    welcome_footoer.id = 'welcome_footer'
    welcome_header.style.textAlign = 'center'
    welcome_logo.style.textAlign = 'center'
    welcome_footer.style.textAlign = 'center'
    welcome_header.innerHTML = 'welcome to <b>flamincome</b>'
    welcome_footer.innerHTML = 'get start at <a href="https://flamincome.github.io/docs">docs</a><br><b>USE AT YOUR OWN RISK!!!</b>'
    welcome.appendChild(welcome_header)
    welcome.appendChild(welcome_logo)
    welcome.appendChild(welcome_footer)

    let $ptty = $('#terminal').Ptty({
        i18n: {
            welcome: welcome.outerHTML,
        }
    });

    $ptty.register('command', {
        name: 'flamincome:',
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
        name: 'get-github',
        method: function (cmd) {
            if (cmd[1]) {
                return {
                    out: `<a href="https://github.com/flamincome/${cmd[1]}">${cmd[1]}</a>`,
                };
            }
            return {
                out: '<a href="https://github.com/flamincome">Flamincome Github</a>',
            };
        },
        options: [1],
        help: 'flamincome github page'
    });
    $ptty.register('command', {
        name: 'deposit-token',
        method: function (cmd) {
            return {
                out: 'coming soon ...',
            };
        },
        help: 'deposit'
    });
    $ptty.register('command', {
        name: 'withdraw-token',
        method: function (cmd) {
            return {
                out: 'coming soon ...',
            };
        },
        help: 'withdraw'
    });

    fetch("/logo/flamincome").then(resp => {
        resp.text().then(logo => {
            $('#welcome_logo').text(logo)
        })
    })
});