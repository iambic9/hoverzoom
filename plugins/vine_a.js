﻿// Copyright (c) 2016 Oleg Anashkin <oleg.anashkin@gmail.com>
// Licensed under the MIT license, read license.txt

var hoverZoomPlugins = hoverZoomPlugins || [];
hoverZoomPlugins.push({
    name:'vine.co',
    prepareImgLinks:function (callback) {
        $('a[href*="//vine.co/v/"]').one('mouseover', function() {
            var link = this.href.replace('http:', location.protocol);
            hoverZoom.prepareFromDocument($(this), link, function(doc) {
                var img = doc.getElementsByTagName('video')[0];
                if (img) {
                    return img.src;
                } else {
                    return false;
                }
            });
        });
    }
});
