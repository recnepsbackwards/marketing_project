$(document).ready(function() {
  //Sets variable footer to block of code which has in-line styling.
  var footer = '<div style="width:100%;height:auto;background-image:url(http://images.assetmarketingsystems.com:8088/broadcastimages/BroadcastAPP/marcom/arrows-bg.png);background-color:#1dade4;  padding: 20px 0px;"><div id="new-footer" class="text-center" style="color:#ffffff;padding: 7px 20px 7px 20px;margin: 0px auto;">&copy;Asset Marketing Systems 2017 - All rights reserved - 888-303-8755 - <a style="color:#ffffff;" href="mailto:info@assetismarketing.com"><u>info@assetismarketing.com</u></a></div></div>';

  //Appends block dynamically to page.
  $('#insert-footer').append(footer);

  //Removes PTI copyright from footer
  $('#copyright').html('');

  //------Function to cycle through images in Ad banner-----
  //Sets the Index to 0
  var theAd = 0;
  //Sets the Array to desired images
  var adImages = new Array(
    "http://images.assetmarketingsystems.com:8088/broadcastimages/BroadcastAPP/marcom/final/sidebar/Brochure.jpg",
    "http://images.assetmarketingsystems.com:8088/broadcastimages/BroadcastAPP/marcom/final/sidebar/Branding.jpg",
    "http://images.assetmarketingsystems.com:8088/broadcastimages/BroadcastAPP/marcom/final/sidebar/Biography.jpg",
    "http://images.assetmarketingsystems.com:8088/broadcastimages/BroadcastAPP/marcom/final/sidebar/Business-Cards.jpg",
    "http://images.assetmarketingsystems.com:8088/broadcastimages/BroadcastAPP/marcom/final/sidebar/Consumer-Reports.jpg",
    "http://images.assetmarketingsystems.com:8088/broadcastimages/BroadcastAPP/marcom/final/sidebar/CRM.jpg",
    "http://images.assetmarketingsystems.com:8088/broadcastimages/BroadcastAPP/marcom/final/sidebar/Flyers.jpg",
    "http://images.assetmarketingsystems.com:8088/broadcastimages/BroadcastAPP/marcom/final/sidebar/Logo-Design.jpg",
    "http://images.assetmarketingsystems.com:8088/broadcastimages/BroadcastAPP/marcom/final/sidebar/NRR.jpg",
    "http://images.assetmarketingsystems.com:8088/broadcastimages/BroadcastAPP/marcom/final/sidebar/Roth.jpg",
    "http://images.assetmarketingsystems.com:8088/broadcastimages/BroadcastAPP/marcom/final/sidebar/Social-Security.jpg"
  );
  //Function start
  function rotate() {
      //Increase count
       theAd++;
       //Check if the count is equal to the array length
       if (theAd == adImages.length) {
         //If so, reset count to 0
          theAd = 0;
       }
       //Change the image src based on the Array
       //rotate-image.src = Array[0] (image source of index 0)
      $('.rotate-image img').attr('src', adImages[theAd]);
      //Sets a timeout for the rotation
       setTimeout(rotate, 3 * 1000);
  }
  //Function End
  //Calls the rotate function
  rotate();
});
