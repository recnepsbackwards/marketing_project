$(document).ready(function() {
  //Sets variable footer to block of code which has in-line styling.
  var footer = '<div style="width:100%;height:auto;background-image:url(http://images.assetmarketingsystems.com:8088/broadcastimages/BroadcastAPP/marcom/arrows-bg.png);background-color:#1dade4;  padding: 20px 0px;"><div id="new-footer" style="color:#ffffff;text-align:center;padding: 7px 20px 7px 20px;margin: 0px auto;">&copy;Asset Marketing Systems 2017 - All rights reserved - 888-303-8755 - <a style="color:#ffffff;" href="mailto:info@assetismarketing.com"><u>info@assetismarketing.com</u></a></div></div>';

  //Appends block dynamically to page.
  $('#insert-footer').append(footer);

  //Removes PTI copyright from footer
  $('#copyright').html('');

  //------Function to cycle through images in Ad banner-----
  //Creates two dimensional array object
  //Sets images and href
  var adImages = new Array(
    ["http://images.assetmarketingsystems.com:8088/broadcastimages/BroadcastAPP/marcom/final/sidebar/Brochure.jpg", "https://marcomcentral.app.pti.com/Asset_Marketing_Systems/assetmarketing/CustomPage.aspx?uigroup_id=478856&page_id=14605"],
    ["http://images.assetmarketingsystems.com:8088/broadcastimages/BroadcastAPP/marcom/final/sidebar/Branding.jpg", "https://marcomcentral.app.pti.com/Asset_Marketing_Systems/assetmarketing/CustomPage.aspx?uigroup_id=478856&page_id=14508"],
    ["http://images.assetmarketingsystems.com:8088/broadcastimages/BroadcastAPP/marcom/final/sidebar/Business-Cards.jpg", "https://marcomcentral.app.pti.com/Asset_Marketing_Systems/assetmarketing/CustomPage.aspx?uigroup_id=478856&page_id=14510"],
    ["http://images.assetmarketingsystems.com:8088/broadcastimages/BroadcastAPP/marcom/final/sidebar/CRM.jpg", "https://marcomcentral.app.pti.com/Asset_Marketing_Systems/assetmarketing/CustomPage.aspx?uigroup_id=478856&page_id=14651"],
    ["http://images.assetmarketingsystems.com:8088/broadcastimages/BroadcastAPP/marcom/final/sidebar/Flyers.jpg", "https://marcomcentral.app.pti.com/Asset_Marketing_Systems/assetmarketing/CustomPage.aspx?uigroup_id=478856&page_id=14608"],
    ["http://images.assetmarketingsystems.com:8088/broadcastimages/BroadcastAPP/marcom/final/sidebar/Logo-Design.jpg", "https://marcomcentral.app.pti.com/Asset_Marketing_Systems/assetmarketing/CustomPage.aspx?uigroup_id=478856&page_id=14509"],
    ["http://images.assetmarketingsystems.com:8088/broadcastimages/BroadcastAPP/marcom/final/sidebar/NRR.jpg", "https://marcomcentral.app.pti.com/Asset_Marketing_Systems/assetmarketing/CustomPage.aspx?uigroup_id=478856&page_id=14908"],
    ["http://images.assetmarketingsystems.com:8088/broadcastimages/BroadcastAPP/marcom/final/sidebar/Roth.jpg", "https://marcomcentral.app.pti.com/Asset_Marketing_Systems/assetmarketing/CustomPage.aspx?uigroup_id=478856&page_id=14957"],
    ["http://images.assetmarketingsystems.com:8088/broadcastimages/BroadcastAPP/marcom/final/sidebar/Social-Security.jpg", "https://marcomcentral.app.pti.com/Asset_Marketing_Systems/assetmarketing/CustomPage.aspx?uigroup_id=478856&page_id=14907"]
  );
  function rotate() {
    //Sets length to array length
      var length = adImages.length;
      //Sets a random value based on array length
      var randomValue = Math.floor(length * Math.random());
       //Changes the image src based on the random value
      $('.rotate-image img').attr('src', adImages[randomValue][0]);
      //Changes the anchor href based on the random value
      $('.rotate-image a').attr('href', adImages[randomValue][1]);
  }
  //Calls the rotate function
  rotate();
});
