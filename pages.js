// videos page
// play YOUTUBE video

const button = document.querySelector("#videos-play-btn");
const video = document.querySelector("#ytVideo");


button.addEventListener('click', () => {
    // video.play();
    // video.style['filter'] = 'none';
    // button.style["display"] = 'none';
    // video.setAttribute('controls', true);

    video.contentWindow.postMessage(
          '{"event":"command","func":"' + 'playVideo' + '","args":""}','*',);
      video.style['filter'] = 'none';
      button.style["display"] = 'none';
  });
