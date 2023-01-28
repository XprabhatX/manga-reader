// Music Player
const sidebar = document.getElementById("sidebar");
const toggleButton = document.getElementById("toggle-sidebar");

toggleButton.addEventListener("click", function() {
    sidebar.classList.toggle("active");
    toggleButton.classList.toggle("active");
});

function zoom_in() {
    let panel1 = document.getElementById("panel_zoom1");
    let panel2 = document.getElementById("panel_zoom2");
    let panel3 = document.getElementById("panel_zoom3");
    let panel4 = document.getElementById("panel_zoom4");
    let panel5 = document.getElementById("panel_zoom5");
    let panel6 = document.getElementById("panel_zoom6");
    let currWidth = panel1.clientWidth;
    panel1.style.width = panel2.style.width = panel3.style.width = panel4.style.width = panel5.style.width = panel6.style.width = (currWidth + 50) + "px";
}

function zoom_out() {
    let panel1 = document.getElementById("panel_zoom1");
    let panel2 = document.getElementById("panel_zoom2");
    let panel3 = document.getElementById("panel_zoom3");
    let panel4 = document.getElementById("panel_zoom4");
    let panel5 = document.getElementById("panel_zoom5");
    let panel6 = document.getElementById("panel_zoom6");
    let currWidth = panel1.clientWidth;
    panel1.style.width = panel2.style.width = panel3.style.width = panel4.style.width = panel5.style.width = panel6.style.width = (currWidth - 50) + "px";
}
