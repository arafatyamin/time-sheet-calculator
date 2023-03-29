function calculateTime() {
    var day = document.getElementById("day").value;
    var startTime = document.getElementById("start-time").value;
    var endTime = document.getElementById("end-time").value;
    var breakTime = parseInt(document.getElementById("break-time").value);
  
    var totalMinutes = timeToMinutes(endTime) - timeToMinutes(startTime) - breakTime;
    var hours = Math.floor(totalMinutes / 60);
    var minutes = totalMinutes % 60;
  
    document.getElementById("total-time").innerHTML = day + ": " + hours + " hours and " + minutes + " minutes";
    document.querySelector(".result").style.display = "block";
  }
  
  function timeToMinutes(time) {
    var hours = parseInt(time.substring(0, 2));
    var minutes = parseInt(time.substring(3, 5));
    return hours * 60 + minutes;
  }
  