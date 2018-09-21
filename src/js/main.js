window.onerror = function (msg, url, lineNo, columnNo, error) {
    var string = msg.toLowerCase();
    var substring = "script error";
    if (string.indexOf(substring) > -1){
        alert('Script Error: See Browser Console for Detail');
    } else {
        var message = [
            'Message: ' + msg,
            'URL: ' + url,
            'Line: ' + lineNo,
            'Column: ' + columnNo,
            'Error object: ' + JSON.stringify(error)
        ].join(' - ');

        console.error(message);
    }

    return false;
};


console.log('run');







let adds = document.querySelectorAll('.well');
console.log(adds);


adds.forEach((el)=>{
    let div = document.createElement('DIV');
    let textNode = document.createTextNode('some node');
    div.appendChild(textNode);
    el.appendChild(div);
});

window.addEventListener('scroll',()=>{
    window.innerHeight+= 50;
     if(window.innerHeight > 50){
          console.log('scroll event');
     }
});

console.log(window.history);
console.log(window.navigator.geolocation.getCurrentPosition((data)=>{
    console.log(data);
    
}));

