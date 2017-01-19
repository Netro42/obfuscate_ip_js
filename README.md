# obfuscate_ip_js
Get user IP using ipify.org with JSONp and then obfuscate results for use with analytics packages, where full IP addresses are considered to be identifiable data.

## Code Example

``` javascript
window.obfuscated_ip = getObfuscatedUserIpAddress();
```

Will return '192.30.252.xxx' for example. Alternatively...


``` javascript
window.obfuscated_ip = getObfuscatedUserIpAddress("255.255.255.255");
```

Will return '255.255.255.xxx' and not fetch an IP from ipify.

## Installation

``` html
<script src="/path/to/your/js/obfuscate_user_ip.min.js"></script>
<script>var obfuscated_user_ip = getObfuscatedUserIpAddress();</script>
```

## Contributors

Please get in touch with @netro42 if you would like to contribute.