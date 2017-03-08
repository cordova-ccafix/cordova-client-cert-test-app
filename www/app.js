function nativeAlertTest() {
  navigator.notification.alert('Native alert test message');
}

function onConfirmChoice(choiceIndex) {
  if (choiceIndex === 0)
    navigator.notification.alert('Confirmed no choice');
  else
    navigator.notification.alert('Confirmed choice: ' + choiceIndex);
}

function confirm2() {
  navigator.notification.confirm(
    'Please confirm a choice',
    onConfirmChoice,
    'Confirm 2 choices',
    ['Choice 1', 'Choice 2']
  );
}

function confirm3() {
  navigator.notification.confirm(
    'Please confirm a choice',
    onConfirmChoice,
    'Confirm 3 choices',
    ['Choice 1', 'Choice 2', 'Choice 3']
  );
}

function reload() {
  location.reload();
}

function goToPage2() {
  window.location = "page2.html";
}

document.addEventListener('deviceready', function() {
  $('#native-alert-test').click(nativeAlertTest);
  $('#confirm-2').click(confirm2);
  $('#confirm-3').click(confirm3);
  $('#reload').click(reload);
  $('#location-page2').click(goToPage2);
});
