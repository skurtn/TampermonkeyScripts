// ==UserScript==
// @name         Gateway Neverwinter Tests
// @namespace    https://github.com/skurtn/TampermonkeyScripts
// @version      1.0.3
// @description  Testing how to tinker with gateway.neverwinter.com
// @author       S. Kurt Newman
// @match        http*://gateway.playneverwinter.com/*
// @run-at       document-end
// @grant        GM_log
// @updateURL    https://raw.githubusercontent.com/skurtn/TampermonkeyScripts/master/snippets/gateway-neverwinter.meta.js
// @downloadURL  https://raw.githubusercontent.com/skurtn/TampermonkeyScripts/master/snippets/gateway-neverwinter.js
// @require      https://code.jquery.com/jquery-3.0.0.min.js#sha256=6069398299730203aa434d1520ccf88ee8bf0aeee241aca18edbd85c78943432
// @noiframes
// ==/UserScript==

(function() {
    'use strict';
    var Version = "1.0.3";
    var Name = "Gatway Neverwinter Test";

    GM_log( Name + " v" + Version + " started" );

    $( ".wrapper" ).change(function() {
        var date = new Date;
        GM_log( "[" + date + "]: The wrapper changed" );
    });

    $( "#modal" ).change(function() {
        var date = new Date;
        GM_log( "[" + date + "]: Got a modal change" );
    });

    $( ".notification" ).change(function() {
        var date = new Date;
        GM_log( "[" + date + "]: Got a notification" );
    });

    GM_log( Name + " v" + Version + " ended" );
})();
