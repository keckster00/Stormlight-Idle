
var i = 0;
function progressClick(element) {
    if (i == 0)
    {
        i = 1;
        var elem = document.getElementById(element);
        var width = 1;
        var id = setInterval(frame, 10);
        function frame()
        {
            if (width >= 100)
            {
                clearInterval(id);
                i = 0;
                elem.style.width = 0 + '%'
            } else
            {
                width++;
                elem.style.width = width + '%';
            }
        }
    }
}



//when to unlock progression?
//secondary tab that appears at unlock condition???
    //if intelligence gets to a certain level -- scholar choice
    //if skill gets to a certain level -- soldier choice