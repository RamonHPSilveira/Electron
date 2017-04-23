const remote = require('electron').remote


function closeThisWin(){
    var window = remote.getCurrentWindow();
    window.close();  
}

function openNewWindow(url){
    window.open(url,"newwindow_main"," width=400, height=400");
}


