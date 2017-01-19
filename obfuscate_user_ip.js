'use strict';

function getObfuscatedUserIpAddress(ip_address) {
    if (!ip_address || typeof 'ip_address' === undefined) {
        var script = document.createElement('script');
        script.src = 'https://api.ipify.org?format=jsonp&callback=returnIpAddressInChunks';
        document.getElementsByTagName('head')[0].appendChild(script);
    } else {
        returnIpAddressInChunks({"ip" : ip_address});
    }
}

function obfuscateTheIp(ip_pieces, ip_version) {
    var toreturn = '';
    var separator = ip_version === 'v6' ? ':' : '.';
    for (i = 0; i < ip_pieces.length - 1; i++) {
        toreturn += ip_pieces[i] + separator;
    }
    toreturn += 'xxx' + (ip_version == 'v6' ? 'x' : '');
    // console.log(toreturn);
    return toreturn;
}

function returnIpAddressInChunks(data) {
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