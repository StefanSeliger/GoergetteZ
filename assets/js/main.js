const openbtn = document.getElementsByClassName("openbtn")[0]

function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
    openbtn.style.display = "none";
}

  /* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
    openbtn.style.display = "block";
}