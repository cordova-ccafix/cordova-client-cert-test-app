function nativeAlertTest() {
  navigator.notification.alert('Native alert test message');
}

function reload() {
  location.reload();
}

function goToPage2() {
  window.location = "page2.html";
}

document.addEventListener('deviceready', function() {
  $('#native-alert-test').click(nativeAlertTest);
  $('#reload').click(reload);
  $('#location-page2').click(goToPage2);
});
