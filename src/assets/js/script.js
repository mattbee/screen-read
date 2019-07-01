
const voiceoverHelpButton = document.querySelector('#voiceover-help-button');
const voiceoverHelpContent = document.querySelector('#voiceover-help');
const skiplink = document.querySelector('#skiplink');

if (docCookies.getItem('voiceoverhelp') == 'true') {
  voiceoverHelpContent.classList.remove('is-hidden');
}

voiceoverHelpButton.addEventListener('click', () => {
  voiceoverHelpContent.classList.remove('is-hidden');
  skiplink.focus();
  docCookies.setItem('voiceoverhelp', 'true');
});

const voiceoverHelpCloseButton = document.querySelector('#voiceover-help-close');

voiceoverHelpCloseButton.addEventListener('click', () => {
  voiceoverHelpContent.classList.add('is-hidden');
  skiplink.focus();
  docCookies.setItem('voiceoverhelp', 'false');
});
