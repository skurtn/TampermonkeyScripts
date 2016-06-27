// ==UserScript==
// @name         SlashdotTest
// @namespace    https://github.com/skurtn/TampermonkeyScripts
// @version      1.0.2
// @description  Tinkers with Slashdot's landing page
// @author       S. Kurt Newman
// @match        https://slashdot.org/*
// @run-at       document-end
// @grant        GM_log
// @noiframes
// @updateURL  https://github.com/skurtn/TampermonkeyScripts/blob/master/snippets/slashdot-tests.meta.js
// @downloadURL  https://github.com/skurtn/TampermonkeyScripts/blob/master/snippets/slashdot-tests.js
// @require      https://code.jquery.com/jquery-3.0.0.min.js#sha256=6069398299730203aa434d1520ccf88ee8bf0aeee241aca18edbd85c78943432
// ==/UserScript==

(function() {
    'use strict';
    var version = "1.0.2";

    GM_log( "Slashdot test script started: v" + version );

    // display a list of story headlines on slashdot
    $( "span.story-title > a" ).each( function( index ) {
        GM_log( "Story: " + $(this).html() );
    });

    GM_log( "Test tampermonkey script ended" );
})();
