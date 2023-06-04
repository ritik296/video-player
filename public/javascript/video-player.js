const video = document.getElementById('video');
const playPauseBtn = document.getElementById('play-pause');
const playIcon = document.getElementById('play-icon');
const pauseIcon = document.getElementById('pause-icon');
const muteBtn = document.getElementById('mute');
const volumeOnIcon = document.getElementById('volume-on-icon');
const volumeOffIcon = document.getElementById('volume-off-icon');
const volumeBar = document.getElementById('volume-bar');
const playbackSpeed = document.getElementById('playback-speed');
const fullscreenBtn = document.getElementById('fullscreen-btn');
const controls = document.getElementById('controls');
const seekBar = document.getElementById('seek-bar');
const playbackTime = document.getElementById('playback-time');
const playCenterIcon = document.getElementById('play-center-icon');

let isSeeking = false;
let timeout;

playPauseBtn.addEventListener('click', togglePlayPause);
video.addEventListener('click', togglePlayPause);
playCenterIcon.addEventListener('click', togglePlayPause);
muteBtn.addEventListener('click', toggleMute);
volumeBar.addEventListener('input', changeVolume);
playbackSpeed.addEventListener('change', changePlaybackSpeed);
fullscreenBtn.addEventListener('click', toggleFullscreen);
document.getElementById('video-container').addEventListener('mousemove', showControls);
document.getElementById('video-container').addEventListener('mouseleave', hideControls);
video.addEventListener('timeupdate', updateProgressBar);
seekBar.addEventListener('mousedown', startSeeking);
seekBar.addEventListener('mousemove', handleSeek);
seekBar.addEventListener('mouseup', endSeeking);

document.addEventListener('keydown', handleKeydown);

video.addEventListener('play', () => {
playIcon.classList.add('hidden');
playCenterIcon.classList.add('hidden');
pauseIcon.classList.remove('hidden');
});

video.addEventListener('pause', () => {
playIcon.classList.remove('hidden');
playCenterIcon.classList.remove('hidden');
pauseIcon.classList.add('hidden');
});

function togglePlayPause() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function toggleMute() {
  video.muted = !video.muted;
  if (video.muted) {
    volumeBar.value = 0;
  } else {
    volumeBar.value = video.volume;
  }
  toggleMuteIcon();
}

function toggleMuteIcon() {
  if (video.muted) {
    volumeOnIcon.classList.add('hidden');
    volumeOffIcon.classList.remove('hidden');
  } else {
    volumeOnIcon.classList.remove('hidden');
    volumeOffIcon.classList.add('hidden');
  }
}

function changeVolume() {
  video.volume = volumeBar.value;
  if (video.volume === 0) {
    video.muted = true;
  } else {
    video.muted = false;
  }
  toggleMuteIcon();
}

function changePlaybackSpeed() {
  video.playbackRate = parseFloat(playbackSpeed.value);
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    video.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

function showControls() {
  clearTimeout(timeout);
  controls.style.opacity = '1';
  timeout = setTimeout(hideControls, 5000);
}

function hideControls() {
  controls.style.opacity = '0';
}

function updateProgressBar() {
  const progress = (video.currentTime / video.duration) * 100;
  seekBar.style.width = `${progress}%`;

  const totalDuration = video.duration;
  const hour = Math.floor(video.currentTime / 3600);
  const minutes = Math.floor(video.currentTime / 60);
  const seconds = Math.floor(video.currentTime % 60);
  playbackTime.textContent = `${hour!=0 ? hour.toString().padStart(2, '0') +':': ''}${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} /
   ${Math.floor(totalDuration / 3600) != 0? Math.floor(totalDuration / 3600).toString().padStart(2, '0') + ':': ''}${Math.floor(totalDuration / 60).toString().padStart(2, '0')}:${Math.floor(totalDuration % 60).toString().padStart(2, '0')}`;
}

function startSeeking() {
  isSeeking = true;
}

function handleSeek(e) {
  if (isSeeking) {
    const seekPosition = (e.clientX - seekBar.getBoundingClientRect().left) / seekBar.offsetWidth;
    const time = seekPosition * video.duration;
    video.currentTime = time;
  }
}

function endSeeking() {
  isSeeking = false;
}

function handleKeydown(e) {
  if (e.key === 'f') {
    toggleFullscreen();
  }
}


//   progress bar

const progress = document.getElementsByClassName('progress')[0];

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));

// Track when mouse is up/down on scrub bar
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);


function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
  console.log(currentTime);
}

// console.log(navigator.userAgent.toLowerCase().indexOf('firefox'));
if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1){
  // console.log(true);
  controls.classList.add('hidden')
}