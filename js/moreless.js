      var hideMoreExpandPanel = function() {
        //for clicked item change display to none; hide 'more'
        $(this).css('display', 'none');
        //for clicked item, its sibling, info-panel slide it down; expand panel
        $(this).siblings('.info-panel').slideDown(1000);
      }

      var showMoreCollapsePanel = function() {
        //for the clicked item select its parent and siblings and set their display to block; show 'more'
        $(this).parent().siblings('.more').css('display', 'block');
        //for the clicked item, selects it parent item and slide panel back up; hide/collapse panel
        $(this).parent('.info-panel').slideUp(1000);
      }
      
      //set event listeners for each button
      $('.more').on('click', hideMoreExpandPanel);
      $('.less').on('click', showMoreCollapsePanel);
