//VARIABLES
var speedCount = document.querySelector('.speedCount')
var agilityCount = 0;
var strengthCount = 0;
var gritCount = 0;
var intelligenceCount = 0;
var skillCount = 0;
var honorCount = 0;


var i = 0;
function progressClick(element, attribute) {
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
                updateCount(attribute)
            } else
            {
                width++;
                elem.style.width = width + '%';
            }
        }
    }
}

function updateCount(attr) {
    var elem = document.querySelector('.' + attr);
    elem.innerHTML = parseFloat(elem.innerHTML) + 1;

    if(attr == 'strengthCount' && elem.innerHTML == 5)
    {
        window.confirm("soldier?");
    }
    else if(attr == 'intelligenceCount' && elem.innerHTML == 5)
    {
        window.alert("scholar")
    }
}


//when to unlock progression?
//secondary tab that appears at unlock condition???
    //if intelligence gets to a certain level -- scholar choice
    //if skill gets to a certain level -- soldier choice