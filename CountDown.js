// Set the date program will be counting down to
var countDownDate = new Date("Sep 20, 2021 05:56:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  //loop
  var i;
  var timeArray = document.querySelectorAll('.timeleft');

  //testcode (a day = 86400000 , an year = 31536000000)
  //var test = new Date("Sep 19, 2022 00:00:00").getTime();
  //var distanceTest = countDownDate - test;
  //document.getElementById("testarti").innerHTML = distance;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="countdown"
  if(0 < distance)  {
  document.getElementById("day").innerHTML = days + " Day ";
  document.getElementById("hour").innerHTML = hours + " Hour ";
  document.getElementById("min").innerHTML = minutes + " Minute ";
  document.getElementById("sec").innerHTML = seconds + " Second ";
  document.getElementById("tt1").innerHTML = "OOO 생일";
  document.getElementById("tt2").innerHTML = "카운트다운";
  document.getElementById("leftalign").innerHTML = "***";
  document.getElementById("rightalign").innerHTML = "***";
    if(distance < 11000) {
      document.getElementById("emphasize").innerHTML = seconds;
      for(i=0; i<timeArray.length; i++) {
          timeArray[i].style.display="none";
      }
    }
  }

  // Count down is finished
  else if (-86400000 < distance && distance < 0) {
    document.querySelector(".timeleft").innerHTML = " ";
    document.querySelector(".titledesign").innerHTML = " ";
    document.getElementById("countdown").innerHTML = "It's your day!<br>Have the best birthday ever!";
    document.getElementById("title").innerHTML = "생일 ㅊㅋ";
    document.getElementById("leftalign").innerHTML = "생";
    document.getElementById("rightalign").innerHTML = "축";
    document.getElementById("emphasize").innerHTML = " ";
  }

  //next birthday setting
  else {
    countDownDate = countDownDate + 31536000000;
  }
}, 1000);

  // Count down is finished
  else if (-86400000 < distance && distance < 0) {
    document.getElementById("countdown").innerHTML = "Today is your birthday!<br>Happy Birthday!";
    document.getElementById("title").innerHTML = "생일 ㅊㅋㅊㅋ";
    document.getElementById("leftalign").innerHTML = "경";
    document.getElementById("rightalign").innerHTML = "축";
    document.getElementById("emphasize").innerHTML = " ";
  }

  //next birthday setting
  else {
    countDownDate = countDownDate + 31536000000;
  }
}, 1000);
