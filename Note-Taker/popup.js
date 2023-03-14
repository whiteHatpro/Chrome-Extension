document.addEventListener('DOMContentLoaded', function() {
    var saveButton = document.getElementById('save');
    var noteTextArea = document.getElementById('note');
    chrome.storage.sync.get('note', function(data) {
      noteTextArea.value = data.note || '';
    });
    saveButton.addEventListener('click', function() {
      var note = noteTextArea.value;
      chrome.storage.sync.set({'note': note});
    });
  });
  