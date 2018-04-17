function abbrevName(name){

    // code away
    let splitNames = name.split(' ');
    let firstInitial = splitNames[0][0];
    let lastInitial = splitNames[1][0];
    return `${firstInitial}.${lastInitial}`.toUpperCase();
}