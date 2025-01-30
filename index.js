//VARIABLES
var _SPEEDCOUNT;
var _AGILITYCOUNT;
var _STRENGTHCOUNT;
var _GRITCOUNT;
var _INTELLIGENCECOUNT;
var _SKILLCOUNT;
var _HONORCOUNT;
var _STORMLIGHTCOUNT



function progressClick(element, attribute) {
    var i = 0;
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

function recursiveProgress(element, attribute) {
    var i = 0;
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
                    recursiveProgress(element, attribute);
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
    switch(attr)
    {
        case 'speedCount':
            _SPEEDCOUNT = elem.innerHTML;
            break;
        case 'agilityCount':
            _AGILITYCOUNT = elem.innerHTML;
            break;
        case 'strengthCount':
            _STRENGTHCOUNT = elem.innerHTML;
            break;
        case 'gritCount':
            _GRITCOUNT = elem.innerHTML;
            break;
        case 'intelligenceCount':
            _INTELLIGENCECOUNT = elem.innerHTML;
            break;
        case 'skillCount':
            _SKILLCOUNT = elem.innerHTML;
            break;
        case 'honorCount':
            _HONORCOUNT = elem.innerHTML;
            break;
        case 'stormlightCount':
            _STORMLIGHTCOUNT = elem.innerHTML;
            break;
    }

    if(attr == 'strengthCount' && elem.innerHTML == 5)
    {
        if(window.confirm("You've been selected to become a soldier? Will you go? (this choice has consequences and cannot be changed."))
        {
            //replace buttons for soldier
        } 
    }
    else if(attr == 'intelligenceCount' && elem.innerHTML == 5)
    {
        window.alert("scholar")
    }
    else if(attr == 'honorCount' && elem.innerHTML == 5)
    {
        window.alert("You've been chosen by a spren!");
        document.querySelector('.stormlightText').innerHTML = 'Stormlight:';
        document.getElementById('stormlightBar').style.display = '';
    }
}

function upgrade(clicked) {
    if(clicked == 'upgrade1')
    {
        recursiveProgress('speed-button', 'speedCount');
    }
    else if(clicked == 'upgrade2')
    {
        recursiveProgress('agility-button', 'agilityCount');
    }
    document.getElementById(clicked).style.display = 'none';
}


//when to unlock progression?
//secondary tab that appears at unlock condition???
    //if intelligence gets to a certain level -- scholar choice
    //if skill gets to a certain level -- soldier choice

/*
TO DO
- need to add new buttons for or change the existing ones when a path has been chosen
- need to add a speed parameter to the progress bar
- work on upgrades
*/