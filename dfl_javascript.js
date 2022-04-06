function toggle_text(id) { 
    var e = document.getElementById(id);
    if(e.style.display != 'block') 
        e.style.display = 'block'; 
    else e.style.display = 'none'; }

function showmodal (id,bid, cid) /* DIV, button, close class name */ {

    var modal = document.querySelector(id);
    var btn = document.querySelector(bid);
    var span = document.querySelector(cid);

    btn.addEventListener("click", function () {
        modal.style.display = "block";
    });

    span.onclick = function () { modal.style.display = "none"; }
    // When the user clicks anywhere outside of the modal, close it
    window.addEventListener("click", function (event) {
        //console.log(event.target);
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
}


