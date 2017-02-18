$( document ).ready(function() {
  var footer = '<div style="width:100%;height:auto;background-image:url(http://images.assetmarketingsystems.com:8088/broadcastimages/BroadcastAPP/marcom/arrows-bg.png);background-color:#1dade4;  padding: 20px 0px;"><div id="new-footer" style="color:#ffffff;padding: 7px 20px 7px 20px;margin: 0px auto;">&copy;Asset Marketing Systems 2017 - All rights reserved - 888-303-8755 - <a style="color:#ffffff;" href="mailto:info@assetismarketing.com"><u>info@assetismarketing.com</u></a></div></div>';

  $('#insert-footer').append(footer);

  var contact = '<div class="contact-consultant text-center"><a href="http://info.amsfmo.com/marcom-standard" target="_blank"><button type="button" name="button" class="btn btn-default">Click Here</button></a><span>to contact your Marketing Consultant, or call 888-303-8755</span></div>'

  $('#insert-contact').append(contact);

});
