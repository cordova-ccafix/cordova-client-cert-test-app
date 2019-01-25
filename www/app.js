function nativeAlertTest() {
  navigator.notification.alert('Native alert test message');
}

document.addEventListener('deviceready', function() {
  $('#native-alert-test').click(nativeAlertTest);
});
