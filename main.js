const rizzData = {
    "illegal_rizz": "Your in your bed, I am in mine. \n One of us is in the wrong place.",
    "awesome_rizz": "Before I came there was no d in you. That will change.",
    "arab_rizz": "Do you want to make some twin towers?",
    "evil_rizz": "Are you a crime scene? \n Because I can't resist leaving my DNA all over you.",
    "legal_rizz": "Are you an artist? \n Because you're really good at drawing me in ;)",
    "other_rizz": "Are you a light switch? \n Because you turn me on!!"
};

function getRizz(type) {
    switch (type) {
        case 'illegal_rizz':
            window.alert(rizzData.illegal_rizz);
            break;
        case 'awesome_rizz':
            window.alert(rizzData.awesome_rizz);
            break;
        case 'arab_rizz':
                window.alert(rizzData.arab_rizz);
                break;
        case 'evil_rizz':
            window.alert(rizzData.evil_rizz);
            break;
        case 'legal_rizz':
            window.alert(rizzData.legal_rizz);
            break;
        case 'other_rizz':
            window.alert(rizzData.other_rizz);
            break;

        default:
            window.alert('Rizz type not found');
    }
}

function changeTheme(filename) {
    var stylesheet = document.getElementById('theme-stylesheet');
    stylesheet.href = filename;
}