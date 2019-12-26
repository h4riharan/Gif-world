//1.grabing the input first
document.querySelector(".js-find").addEventListener('click',function(e){
    var input = document.querySelector("input").value;
    searchme(input);
    //pushtopage(input);

});

document.querySelector(".js-userinput").addEventListener('keyup',function(e){
    var input = document.querySelector("input").value;
    if(e.which === 13){
        searchme(input);
        //pushtopage(input);
    }
});

document.querySelector(".js-userinput").addEventListener('keyup',function(e){
    if(e.which === 8){
        location.reload();
    }
});


//2.fetching GIFs from API
function searchme(keyword){
    var url = "https://api.giphy.com/v1/gifs/search?api_key=5rCzgA1boJzu13W1iU36cyoAMaqVDz0u&q="+ keyword;

    // AJAX Request
    var GiphyAJAXCall = new XMLHttpRequest();
        GiphyAJAXCall.open( 'GET', url );
        GiphyAJAXCall.send();
        GiphyAJAXCall.addEventListener('load',function(e){
    var data = e.target.response;
    pushtopage(data);
    });
}

//displaying the GIFs
function pushtopage(input){
    var response = JSON.parse(input);
    var imageUrls = response.data;
    imageUrls.forEach(function(image){
     var src = image.images.fixed_height.url;
     console.log(src);
     var container = document.querySelector(".js-container");
    container.innerHTML += "<img src=\" " + src + " \" class=\"container-image\">";
    });
}
