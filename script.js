fetch('./update.json')
  .then(function (r) { return r.json(); })
  .then(function (data) {
    var versionTag = document.getElementById('version-tag');
    var versionText = document.getElementById('version-text');
    var downloadBtn = document.getElementById('download-btn');
    var notesSection = document.getElementById('notes-section');
    var notesText = document.getElementById('notes-text');

    if (data.versionName) {
      versionTag.textContent = 'v' + data.versionName;
      versionText.textContent = 'Version ' + data.versionName;
    }
    if (data.apkUrl) {
      downloadBtn.href = data.apkUrl;
    }
    if (data.releaseNotes) {
      notesText.textContent = data.releaseNotes;
      notesSection.hidden = false;
    }
  })
  .catch(function () {
    document.getElementById('version-text').textContent = 'SmartBoard';
  });
