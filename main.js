let startBtn, fileInput, audio, canvas
let audioContext, canvasContext

function init() {
  // assign html elements 
  startBtn = document.getElementById('start-btn')
  fileInput = document.getElementById('file-input')
  audio = document.getElementById('audio')
  canvas = document.getElementById('canvas') 

  // set up context
  canvasContext = canvas.getContext( '2d' ) 
  audioContext = new AudioContext()

  // add event listeners 
  canvas.addEventListener( 'mousedown', mouseDownHandler, false );
  canvas.addEventListener( 'mouseup', mouseUpHandler, false );
  canvas.addEventListener( 'mousemove', mouseMoveHandler, false );
  canvas.addEventListener( 'mouseenter', mouseEnterHandler, false ); 
  canvas.addEventListener( 'mouseleave', mouseLeaveHandler, false ); 

  window.addEventListener( 'resize', onResize, false );

  // start functions 
  onResize();
  addCircles();
  render();
  clearImageData();
  render();

  canvasContext.putImageData( imageData, 0, 0 );
  
  // startBtn.addEventListener( 'mousedown', userStart, false );
  // fileInput.addEventListener( 'change', loadAudioFileHandler, false ); // <--
  // ^^^ (Where I left off - create file input on change to deal with CORS issue)

  fileInput.onchange = fileOnChange

  // labelLoadAudio = document.getElementById( 'labelLoadAudio' );
  // labelLoadAudio.style.display = 'none';
  
  txtStatus = document.getElementById( 'txtStatus' );
  txtStatus.innerHTML = 'Waiting Patiently For You... Please Click the Start Button.';

  // set up file input 
}

function onResize() {
  
}

function fileOnChange(e) {
  const files = this.files 

  audio.src = URL.createObjectURL(files[0])
}

window.onload = function() {
  init();
}