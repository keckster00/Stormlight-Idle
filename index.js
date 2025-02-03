//VARIABLES
var _SPEEDCOUNT;
var _AGILITYCOUNT;
var _STRENGTHCOUNT;
var _GRITCOUNT;
var _INTELLIGENCECOUNT;
var _SKILLCOUNT;
var _HONORCOUNT;
var _STORMLIGHTCOUNT


var i = 0;
function progressClick(element, attribute, value) {
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
                updateCount(attribute, value)
                elem.style.pointerEvents = '';
            } else
            {
                width++;
                elem.style.width = width + '%';
            }
        }
    }
}

function recursiveProgress(element, attribute, value) {
    var j = 0;
    if (j == 0)
        {
            j = 1;
            var elem = document.getElementById(element);
            var width = 1;
            var id = setInterval(frame, 10);
            function frame()
            {
                if (width >= 100)
                {
                    clearInterval(id);
                    j = 0;
                    elem.style.width = 0 + '%'
                    updateCount(attribute, value)
                    recursiveProgress(element, attribute, value);
                } else
                {
                    width++;
                    elem.style.width = width + '%';
                }
            }
        }
}

function updateCount(attr, value) {
    var elem = document.querySelector('.' + attr);
    elem.innerHTML = parseFloat(elem.innerHTML) + value;
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
            showSoldier();
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
    if(clicked == 'upgrade1' && _SPEEDCOUNT >= 10)
    {
        recursiveProgress('speed-button', 'speedCount', 1);
        upgradeBought(clicked, 'speedContainer');
    }
    else if(clicked == 'upgrade2' && _AGILITYCOUNT >= 10)
    {
        recursiveProgress('agility-button', 'agilityCount');
        upgradeBought(clicked, 'agilityContainer');
    }
    else {
        alert("not enough resources");
    }
    //document.getElementById(clicked).style.display = 'none';
}

function upgradeBought(clicked, container)
{
    document.getElementById(clicked).style.display = 'none';
    document.getElementById(container).onclick='';
}

function showSoldier() {
    //Hide base progress bars
    document.getElementById('speedContainer').style.display = 'none';
    document.getElementById('agilityContainer').style.display = 'none';
    document.getElementById('strengthContainer').style.display = 'none';
    document.getElementById('gritContainer').style.display = 'none';
    document.getElementById('intelligenceContainer').style.display = 'none';
    document.getElementById('skillContainer').style.display = 'none';
    document.getElementById('honorContainer').style.display = 'none';

    //Show soldier progress bars
    document.getElementById('speedContainer-Soldier').style.display = '';
    document.getElementById('agilityContainer-Soldier').style.display = '';
    document.getElementById('strengthContainer-Soldier').style.display = '';
    document.getElementById('gritContainer-Soldier').style.display = '';
    document.getElementById('intelligenceContainer-Soldier').style.display = '';
    document.getElementById('skillContainer-Soldier').style.display = '';
    document.getElementById('honorContainer-Soldier').style.display = '';
    
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