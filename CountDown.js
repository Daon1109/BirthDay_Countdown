// Set the date program will be counting down to
var countDownDate = new Date("July 27, 2022 00:00:00").getTime();

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
  document.getElementById("tt1").innerHTML = "주후닝 생일";
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
    document.getElementById("countdown").innerHTML = "(.Y.)";
    document.getElementById("title").innerHTML = "Pornhub 무료 이용권";
    document.getElementById("leftalign").innerHTML = "섹";
    document.getElementById("rightalign").innerHTML = "스";
    document.getElementById("emphasize").innerHTML = " ";
  }

  //next birthday setting
  else {
    countDownDate = countDownDate + 31536000000;
  }
}, 1000);
