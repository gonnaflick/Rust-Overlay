function myFunction() {
  var lock = document.getElementById('inventory');
  var text = document.getElementById('text');
  var temp = document.getElementById('temp');
  if (lock.classList.contains('unlockClass')) {
    lock.className = "lockClass";
    text.className = "fa fa-lock";
    text.style.color = "red";
    temp.style.color = "red";
    temp.innerHTML = "Drag locked";
  } else {
    lock.className = "unlockClass";
    text.className = "fas fa-lock-open";
    text.style.color = "green";
    temp.style.color = "green";
    temp.innerHTML = "Drag unlocked";
  }
}