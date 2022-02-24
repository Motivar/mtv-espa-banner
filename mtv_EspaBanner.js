function mtv_espa_banner(options) {
    var defaults = {
        position: 'bottom',
        padding: '5px',
        height: '50px',
        img_max_width: '320px',
        img_url: '',
        z_index: 999999999,
        img_href: '',
        main_div_css: '',
        wrapper_css: '',
        img_css: '',
    };

    const Options = {
        ...defaults,
        ...options,
    };
    if (Options.img_url == '') {
        return true;
    }
    mtv_espa_print_css(Options);
    var img = '<img src="' + Options.img_url + '" alt="mtv-espa-image" style="' + Options.img_css + '"/>';
    if (Options.img_href != '') {
        img = '<a href="' + Options.img_href + '" target="_blank">' + img + '</a>';
    }
    var html = '<div id="mtv-espa-wrapper" style="' + Options.main_div_css + '"><div class="mtv-espa-image" style="' + Options.wrapper_css + '">' + img + '</div></div>';
    document.body.innerHTML += html;

}

function mtv_espa_print_css(Options) {
    var position_style = 'bottom:0px;'
    if (Options.position == 'top') {
        position_style = 'top:0px;';
    }

    var styles = `
    #mtv-espa-wrapper {
    width: 100%;
    padding: ${Options.padding};
    position: fixed;
    ${position_style}
    left: 0px;
    right:0px;
    z-index:  ${Options.z_index};
    background: white;
    border-top: solid 2px;
    height: ${Options.height};
    .mtv-espa-image {
        width: 95%;
        margin: 0 auto;
        max-width: ${Options.img_max_width};
        img {
            width: 100%;
        }
    }
}`.trim();

    var styleSheet = document.createElement("style")
    styleSheet.type = "text/css";
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet)
}