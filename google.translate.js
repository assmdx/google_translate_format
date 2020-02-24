// ==UserScript==
// @name         Google translation replace character
// @namespace    https://translate.google.cn/*
// @version      0.1
// @description  press F5
// @author       XMAN,assmdx
// @include      https://*translate.google.*/*
// @match        http://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    //you can change what you want
    var count = 0;
    var timer = setInterval(function(){
        count++;

        var txt = "";
        txt = document.getElementById("source").value;
        for (var i=0;i<txt.length;i++)
        {
            if(txt.indexOf("\n"))txt = txt.replace("\n"," ");
        }
        document.getElementById("source").value = txt;

        if (count > 24 * 3600) {
             clearInterval(timer);
        }
    },1000);
})();

