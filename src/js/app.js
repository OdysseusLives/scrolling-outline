'use strict';

var pagepiling = require('pagepiling.js');

$(document).ready(function() {
      $('#pagepiling').pagepiling({
        direction: 'vertical',
        anchors: ['page1', 'page2', 'page3', 'page4'],
        menu: '#menu',
        sectionsColor: ['white', '#ee005a', '#2C3E50', '#39C'],
        navigation: {
          'position': 'right',
          'tooltips': ['Page 1', 'Page 2', 'Page 3', 'Page 4']
        },
        onLeave: function (index, nextIndex, direction) {
          if (nextIndex == 4) {
            $('#pp-nav').fadeOut();
          }
          if (index == 4) {
            $('#pp-nav').fadeIn();
          }
        }
      });
    });