const remote = require('electron').remote


function closeThisWin(){
    var window = remote.getCurrentWindow();
    window.close();  
}

function openNewWindow(url){
    window.open(url,"newwindow_main"," useContentSize:true");
}


