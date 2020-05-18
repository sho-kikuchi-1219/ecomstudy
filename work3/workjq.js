let count = 0
for(let i = 1; i <= 4; i++){
    const tr = $('<tr>');
    for(let j = 1; j <= 4; j++){
        count++
        tr.append($('<td>').text(count).attr('id',count).addClass('cell'));
            /*
        const tmp = kikuchi.append($('<td>').text(count));
        tmp.attr('id',count);
        tmp.addClass('cell');
        
        tr.append($('<td>').attr('id', count))
        $(`#${count}`).text(count)
        $('#' + count).addClass('cell')
        */
    };
    $('#base').append(tr);
}

//let allIDnumber = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
//let allIDnumber = [16,15,14,13,12,11,10,9,7,6,5,4,2,1,8,3]
let allIDnumber = []
for (let i = 16; i > 0; i--) {
allIDnumber.push(i)
}
let selector = -1 
let deleteIndexnumber = -1
let startbutton = false  

const roll = () => {
let remclass = $('#' + selector);
if (remclass) {
    remclass.removeClass('hit');
}
//let randomIDnumber = Math.floor(Math.random()*(allIDnumber.length-1 +1));
let randomNumberForIndex = Math.floor(Math.random()*(allIDnumber.length -1));
//[1,2,3,4,5,7,9,11,12,14,15]
//hitnumber = $('#' + randomNumberForIndex);
hitnumber = allIDnumber[randomNumberForIndex];
number = $('#'+ hitnumber)
number.addClass('hit');
selector = hitnumber;
deleteIndexnumber = randomNumberForIndex
}

$('#start').click(function(){
if (startbutton === false){
rollstart = setInterval(roll,100)
}
startbutton = true
});

$('#stop').click(function(){
if (startbutton === true){
    clearInterval(rollstart);
    allIDnumber.splice(deleteIndexnumber,1);
    $('#'+selector).addClass('keep');
}
startbutton = false
console.log(allIDnumber);
});

$('#reset').click(function(){
clearInterval(rollstart) ;
startbutton = false
$('.keep').removeClass('keep');
$('.hit').removeClass('hit');
allIDnumber = []
for (let i = 16; i > 0; i--) {
allIDnumber.push(i)
}
});