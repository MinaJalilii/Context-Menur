let contextMenu = document.getElementById('contextMenu')
document.body.addEventListener("contextmenu", function (event) {
    if (contextMenu.style.display === 'none') {
        contextMenu.style.display = 'block';
        contextMenu.style.top = event.pageY + 'px';
        contextMenu.style.left = event.pageX + 'px';
    } else {
        contextMenu.style.top = event.pageY + 'px';
        contextMenu.style.left = event.pageX + 'px';
    }

})

document.body.addEventListener("click", function () {
    contextMenu.style.display = 'none';
})

document.body.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
        contextMenu.style.display = 'none';
    }
})