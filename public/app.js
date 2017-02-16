var appendElements = function(){
  for(var i = 0; i < (arguments.length-1); i++){
    var child = arguments[i];
    var parent = arguments[i + 1];
    parent.appendChild(child)
  }
};



var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();

  request.open('GET', url);
  request.onload = callback;
  request.send();
}

var requestComplete = function(){
  if(this.status !== 200) return;
  var jsonString = this.responseText;
  var albums = JSON.parse(jsonString);
  // console.log(albums);

  populateShowAlbums(albums);
}

var getInput = function(){
  var searchQuery = document.getElementById('search-query');
  var url = "https://api.spotify.com/v1/search?q=" + searchQuery.value + "=&type=album";
  return url;
}

var populateShowAlbums = function(albums){

  var showAlbums = document.getElementById('albums');

  if(this.status !== 200) return;
  var jsonString = this.responseText;
  var albums = JSON.parse(jsonString);
  console.log(albums);

  
  var li = document.createElement('li');
  li.innerText = "stuff related to what you have inputted: " + albums.name;
  
  appendElements(li, showAlbums);
}
  



var showAlbumDetails = function(){
  var url = getInput();
  // var url = "https://api.spotify.com/v1/search?q=metal&type=album";
  makeRequest(url, populateShowAlbums);
}




var app = function(){

// var url = getInput;
// var showAlbums = document.getElementById('albums');

var button = document.getElementById('button');
button.onclick = showAlbumDetails;

}

window.onload = app;