const { body } = document;

function changeBacground(number) {
    // Check if background already showing
    let previousBackground
    if(body.classList) {
        previousBackground = body.className;
    }
    // Reset CSS class
    body.className = '';
    switch (number) {
        case '1':
        return (previousBackground === 'background-1' ? false : body.classList.add('background-1'));
        case '2':
            return (previousBackground === 'background-2' ? false : body.classList.add('background-2'));
        case '3':
            return (previousBackground === 'background-3' ? false : body.classList.add('background-3'));
        case '4':
            return (previousBackground === 'background-4' ? false : body.classList.add('background-4'));
        default:
            break;
    }
}