const shareLink = document.getElementById('share-link');
const toast = document.getElementById('toast-success');

function getShareLink(){
    var link = shareLink.value;
    // alert(link)
    navigator.clipboard.writeText(link);
    toast.classList.remove('hidden')
}

// url - link of content that you want to share
function shareOnFacebook(url){
    const navUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + url;
    window.open(navUrl , '_blank');
  }
function shareOnTwitter(url){
    const navUrl = 'http://twitter.com/share?=' + url;
    window.open(navUrl , '_blank');
  }
function shareOnMail(url){
    const navUrl = 'https://mail.google.com/mail/u/0/?tf=cm&source=mailto&body=' + url;
    window.open(navUrl , '_blank');
  }