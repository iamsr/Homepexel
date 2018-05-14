<<<<<<< HEAD

    var greeting;
    var timetext =  document.getElementById("time");
    var greetingtext = document.getElementById("name");
    var query = 'Nature'; //DEFAULT QUERY 
    setBackground(query);
    var searchbar = document.getElementById("search");

    //GET PHOTOS TYPED IN SEARCHBAR
    searchbar.addEventListener("keydown",function(event){
        if(event.key==="Enter")
        {
            event.preventDefault();
           query = searchbar.value;
           setBackground(query);
            searchbar.value = " ";
        }
    });

//SET TIME 
function getTime(){
    var time = new Date();
    var hour = time.getHours();
    var minutes = time.getMinutes();
    
    if(minutes<10)
    {
        minutes = '0' +minutes;
    }

    if(hour>=12&&hour<17)
    {
        greeting = 'Good Afternoon';
    }
    else if(hour>=17&&hour<24)
    {
        greeting = 'Good Evening';
    }
    else{
        greeting = 'Good Morning';
    }
 
    if(hour>12){
        hour = hour-12;
    }
     if(hour==0)
     {
         hour = 12;
     }
    if(hour<10){hour= '0' + hour;}

    timetext.innerHTML = hour + ':' + minutes;
    greetingtext.innerHTML = greeting +', ShubhamR';  // CHANGE NAME HERE <-------------------------------------------

}

setInterval(getTime,100); //REFRESH TIME SO CAN UPDATE REAL TIME


//PEXEL API CODE 
function setBackground(queryName)
{
var apiKey ;//SET VARIABLE EQUAL TO API KEY RECEIVED FROM PEXEL <---------------------------------------------------------------------------
var hourBackground = new Date().getHours(); //AS RESULT PER PAGE SET TO 24 BACKGROUND IS SET ACCORDING TO REAL TIME HOUR
var xhr = new XMLHttpRequest();
xhr.open('GET', "https://api.pexels.com/v1/search?query="+queryName+"+query&per_page=24&page=1", true); // INCREASE RESULT PER PAGE BY REPLACING 15 (min:15 max:40)
xhr.setRequestHeader('Authorization', apiKey);  // REPLACE APIKEY WITH THE KEY YOU GOT THROUGH PEXEL <-------------------------------------
xhr.responseType = 'json';
xhr.send();
xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var resp = xhr.response;
        var urll = JSON.stringify(resp.photos[hourBackground].src.landscape); //CHANGE NUMBER ACCORDING TO YOU IN ARRAY <-----------------
        document.body.style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ),url(' + urll + ')'; //SET BACKGROUND TINT FOR IMAGE (LITTLE DARK) IF YOU DON'T WANT REMOVE IT 
        
   }
};
}




=======

    var greeting;
    var timetext =  document.getElementById("time");
    var greetingtext = document.getElementById("name");
    var query = 'Nature'; //DEFAULT QUERY 
    setBackground(query);
    var searchbar = document.getElementById("search");

    //GET PHOTOS TYPED IN SEARCHBAR
    searchbar.addEventListener("keydown",function(event){
        if(event.key==="Enter")
        {
            event.preventDefault();
           query = searchbar.value;
           setBackground(query);
            searchbar.value = " ";
        }
    });

//SET TIME 
function getTime(){
    var time = new Date();
    var hour = time.getHours();
    var minutes = time.getMinutes();
    
    if(minutes<10)
    {
        minutes = '0' +minutes;
    }

    if(hour>=12&&hour<17)
    {
        greeting = 'Good Afternoon';
    }
    else if(hour>=17&&hour<24)
    {
        greeting = 'Good Evening';
    }
    else{
        greeting = 'Good Morning';
    }
 
    if(hour>12){
        hour = hour-12;
    }
     if(hour==0)
     {
         hour = 12;
     }
    if(hour<10){hour= '0' + hour;}

    timetext.innerHTML = hour + ':' + minutes;
    greetingtext.innerHTML = greeting +', ShubhamR';  // CHANGE NAME HERE <-------------------------------------------

}

setInterval(getTime,100); //REFRESH TIME SO CAN UPDATE REAL TIME


//PEXEL API CODE 
function setBackground(queryName)
{
var apiKey ;//SET VARIABLE EQUAL TO API KEY RECEIVED FROM PEXEL <---------------------------------------------------------------------------
var hourBackground = new Date().getHours(); //AS RESULT PER PAGE SET TO 24 BACKGROUND IS SET ACCORDING TO REAL TIME HOUR
var xhr = new XMLHttpRequest();
xhr.open('GET', "https://api.pexels.com/v1/search?query="+queryName+"+query&per_page=24&page=1", true); // INCREASE RESULT PER PAGE BY REPLACING 15 (min:15 max:40)
xhr.setRequestHeader('Authorization', apiKey);  // REPLACE APIKEY WITH THE KEY YOU GOT THROUGH PEXEL <-------------------------------------
xhr.responseType = 'json';
xhr.send();
xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var resp = xhr.response;
        var urll = JSON.stringify(resp.photos[hourBackground].src.landscape); //CHANGE NUMBER ACCORDING TO YOU IN ARRAY <-----------------
        document.body.style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ),url(' + urll + ')'; //SET BACKGROUND TINT FOR IMAGE (LITTLE DARK) IF YOU DON'T WANT REMOVE IT 
        
   }
};
}




>>>>>>> 3b9c881dd310d365e4a5e5b4296b5071daf3c814
