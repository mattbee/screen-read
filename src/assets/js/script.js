
const voiceoverHelpButton = document.querySelector('#voiceover-help-button');
const voiceoverHelpContent = document.querySelector('#voiceover-help');

if (docCookies.getItem('voiceoverhelp') == 'true') {
  voiceoverHelpContent.classList.remove('is-hidden');
}

voiceoverHelpButton.addEventListener('click', () => {
  voiceoverHelpContent.classList.remove('is-hidden');
  docCookies.setItem('voiceoverhelp', 'true');
});

const voiceoverHelpCloseButton = document.querySelector('#voiceover-help-close');

voiceoverHelpCloseButton.addEventListener('click', () => {
  voiceoverHelpContent.classList.add('is-hidden');
  docCookies.setItem('voiceoverhelp', 'false');
});