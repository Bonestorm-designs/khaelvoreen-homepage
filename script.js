document.getElementById('sidebar-toggle').addEventListener('click', function(){
    const sidebar = document.getElementById('sidebar');
    const toggleArrow = document.getElementById('sidebar-toggle');

    if(sidebar.style.left === "0%"){
        sidebar.style.left = "-78%";
        toggleArrow.innerHTML = "➤";
    } else {
        sidebar.style.left = "0%";
        toggleArrow.innerHTML = "⬅";
    }
});
