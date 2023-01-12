function addBadge(){
    var numAlbums = document.getElementsByClassName('card-body').length;
    for(let i = 0; i<numAlbums; i++){
        var spl;
        var badge = document.createElement('div');
        badge.classList.add('card-badge');
        spl = document.getElementsByClassName('card-genre')[0];

            for(let x = 0; x < spl.length; x++){
            document.getElementsByClassName('card')[i].appendChild(badge);  
            }    
        }
    }
    function addDelete(){
        var removeBtn = document.getElementsByTagName('button');
  
for (var i = 0 ; i < removeBtn.length; i++) {
     removeBtn[i].addEventListener("click", function(){
        removeBtn[i].parentNode.parentNode.parentNode.removeChild(removeBtn[i].parentNode.parentNode);
     }
     );   
  }
    }
  window.onload = addDelete();
