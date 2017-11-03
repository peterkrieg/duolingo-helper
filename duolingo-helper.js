// class names of repeat audio buttons
// these are set dynamically with react.. so must change whenever front end is updated?
const repeatAudioButton = '._2QU6b';
const repeatAudioSlowButton = '._2Hl7-';

document.addEventListener('keypress', ({ ctrlKey, key }) => {
    /*
      all shortcuts require control key
      when focused to textarea, duolingo already listens for certain key presses it looks like
      so doesn't bubble up event propagation
      ctrl r and ctrl g are shortcut keys
    */
    
  if (ctrlKey) {
    if (key === 'r') {
      console.log('control r pressed!');
      document.querySelector(repeatAudioButton).click();
    }
    if (key === 'g') {
      console.log('control t pressed!');
      document.querySelector(repeatAudioSlowButton).click();
    }
  }
})