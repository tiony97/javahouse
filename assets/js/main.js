/* PARTNERS TAB */
$(document).ready(function () {
  // Show the default tab on page load
  showTab("tab-1");

  // Handle tab click events
  $(".tab-nav").click(function () {
    var tabId = $(this).data("tab");
    showTab(tabId);

    //Add active class to the clicked link
    $(this).addClass("active");
    $(".tab-nav").not(this).removeClass("active");
  });

  function showTab(tabId) {
    // Hide all tabs and show the selected one
    $(".tab").removeClass("active");
    $("#" + tabId).addClass("active");
  }
});

/* OVERLAY MENU */
$(document).ready(function () {
  $("#menu-open").click(() => {
    $(".overlay-menu").addClass("active");
  });
  $("#menu-close").click(() => {
    $(".overlay-menu").removeClass("active");
  });
  $(".overlay-links a").click(() => {
    $(".overlay-menu").removeClass("active");
  });
});
