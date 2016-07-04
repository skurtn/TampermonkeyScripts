// ==UserScript==
// @name         Gateway Neverwinter Tests
// @namespace    https://github.com/skurtn/TampermonkeyScripts
// @version      1.0.3
// @description  Testing how to tinker with gateway.neverwinter.com
// @author       S. Kurt Newman
// @match        http*://gateway.playneverwinter.com/*
// @run-at       document-end
// @grant        GM_log
// @require      https://code.jquery.com/jquery-3.0.0.min.js#sha256=6069398299730203aa434d1520ccf88ee8bf0aeee241aca18edbd85c78943432
// @noiframes
// ==/UserScript==

function WaitSelectorException( selector ) {
    this.selector = selector;
    this.type = "WaitSelectorException";
}

$.fn.waitSelector = function( selector, handler ) {
    var interval = localStorage.getItem( selector );

    if( !interval ) {
        interval = window.setInterval( function() {
            var dom = $( selector );

            if( dom.length > 0 ) {
                window.clearInterval( interval );
                localStorage.removeItem( selector );
                handler( dom );
            }

        }, 500);

        localStorage.setItem( selector, interval );
    }
    else
        throw new WaitSelectorException( selector );

    return true;
};

function mutationHandler( mutations ) {
    var d = new Date();

    GM_log( "[" + d + "] Mutation Found" );
    mutations.forEach( function( mutation ) {
            GM_log( mutation );
    });
    GM_log( "[" + d + "] Mutations Done" );
}

(function() {
    'use strict';
    $( document ).waitSelector( "div.box-content", function( dom ) {
        var mutationConfig = { childList: true, characterData: true, attributes: true, subtree: true };
        var observer = new window.MutationObserver (mutationHandler);
        dom.each( function() {
            observer.observe( this, mutationConfig );
        });
    });
})();
