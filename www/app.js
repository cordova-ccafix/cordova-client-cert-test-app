function nativeAlertTest() {
  navigator.notification.alert('Native alert test message');
}

function registerAlice() {
  clientCertificate.registerAuthenticationCertificate(
    cordova.file.applicationDirectory.substring(7) + "www/alice.p12", "",
    function() { alert('alice.p12 registered OK'); },
    function(err) { alert('alice.p12 certificate error: ' + err.message); });
}

function registerBob() {
  clientCertificate.registerAuthenticationCertificate(
    cordova.file.applicationDirectory.substring(7) + "www/bob.p12", "",
    function() { alert('bob.p12 registered OK'); },
    function(err) { alert('bob.p12 certificate error: ' + err.message); });
}

function testAccess() {
  let x1 = new XMLHttpRequest();

  x1.open('GET', 'https://ccatesting.com/authenticate', true);

  x1.onload = function() {
    alert('Received XHR respone: ' + x1.response);
  }

  x1.onerror = function() {
    alert('Received XHR error with status: ' + x1.status);
  }

  x1.send();
}

document.addEventListener('deviceready', function() {
  $('#native-alert-test').click(nativeAlertTest);
  $('#register-alice').click(registerAlice);
  $('#register-bob').click(registerBob);
  $('#test-access').click(testAccess);
});
