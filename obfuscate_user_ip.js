'use strict';

function getObfuscatedUserIpAddress() {
    var script = document.createElement('script');
    script.src = 'https://api.ipify.org?format=jsonp&callback=returnIpAddressOfUser';
    document.getElementsByTagName('head')[0].appendChild(script);
}

function obfuscateTheIp(ip_pieces, ip_version) {
    var toreturn = '';
    var separator = '.';
    if (ip_version == 'v6') {
        separator = ':';
    }
    for (i = 0; i < ip_pieces.length - 1; i++) {
        toreturn += ip_pieces[i] + separator;
    }
    toreturn += 'xxx' + (ip_version == 'v6' ? 'x' : '');
    console.log(toreturn);
    return toreturn;
}

function returnIpAddressOfUser(data) {
    var userip = data.ip;
    if (!userip.length) {
        return null;
    }
    var ip_piecees = userip.split(".");
    if (ip_piecees.length) {
        // this is ipv4
        return obfuscateTheIp(ip_piecees, 'v4');
    } else {
        var ip_piecees = userip.split(":");
        if (ip_piecees.length) {
            // this is ipv6
            return obfuscateTheIp(ip_piecees, 'v6');
        }
    }
    return null;
}