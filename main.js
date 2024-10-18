const rizzData = {
    "illegal_rizz": "Your in your bed, I am in mine. \n One of us is in the wrong place.",
    "awesome_rizz": "Before I came there was no D in you. That will change.",
    "arab_rizz": "Do you want to make some twin towers?",
    "evil_rizz": "Are you a crime scene? \n Because I can't resist leaving my DNA all over you.",
    "legal_rizz": "Are you an artist? \n Because you're really good at drawing me in ;)",
    "adam_rizz": "Are you food? \n Because I'm going to fanum tax you.",
    "other_rizz": "Are you a light switch? \n Because you turn me on!!"
};
//Adam I personally would not take that amount of disrespect ;)//

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
        case 'adam_rizz':
            window.alert(rizzData.adam_rizz);
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

function randomRizzler() {
    var randomRizz = '';

    let randomNumber = Math.floor(Math.random() * 10);

    switch (randomNumber) {
        case 0:
            document.getElementById('randomrizz').textContent = 'You\'re in your bed, I\'m in mine.\nOne of us is in the wrong place';
            break;
        case 1:
            document.getElementById('randomrizz').textContent = 'Before I came there was no D in you. That will change'
            break;
        case 2:
            document.getElementById('randomrizz').textContent = 'Do you want to make some twin towers?'
            break;
        case 3:
            document.getElementById('randomrizz').textContent = 'Are you a crime scene?? Because I can\'t resist leaving my DNA all over you.'
            break;
        case 4:
            document.getElementById('randomrizz').textContent = 'Are you an artist? Because you\'re really good at drawing me in ;)'
            break;
        case 5:
            document.getElementById('randomrizz').textContent = 'Are you a light switch? Because you turn me on!'
            break;
        case 6:
            document.getElementById('randomrizz').textContent = 'Are you a time traveler? Because I can see you in my future.'
            break;
        case 7:
            document.getElementById('randomrizz').textContent = 'Are you Google? Because you\'re everything I\'ve been searching for.'
            break;
        case 8:
            document.getElementById('randomrizz').textContent = 'If you were a vegetable, you\'d be a CUTEcumber!'
            break;
        case 9:
            document.getElementById('randomrizz').textContent = 'Are you a bank loan? Because you have got my interest!'
            break;
        case 10:
            document.getElementById('randomrizz').textContent = 'Are you a camera? Because every time I look at you, I smile.'
            break;
        case 11:
            document.getElementById('randomrizz').textContent = 'Are you a dictionary? Cause you\'re adding meaning to my life.'
            break;
        case 12:
            document.getElementById('randomrizz').textContent = 'Are you food? Because I\'m going to fanum tax you.'
            break;
    }
}