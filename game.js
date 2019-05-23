paperclips = 0;

// console.log(document.getElementById('ammount-paperclips'));
// var ui_element = document.getElementById('ammount-paperclips');
var ui_element;

// console.log(ui_element);
// while (true) {
    // ui.innerHTML = "Paperclips :" + paperclips;
// }
setTimeout( function(){

    // ui_element = console.log(document.getElementById('ammount-paperclips'));
    ui_element = document.getElementById('ammount-paperclips');

    setInterval(function() {
        // console.log(ui_element);
        // ui.innerHTML = "Paperclips :" + paperclips;
        // document.getElementById('ammount-paperclips').innerHTML = "Paperclips : " + paperclips;
        // ui_element.innerHTML = "asdad";
        ui_element.innerHTML = "Paperclips :" + paperclips;
    }, 50);


}, 100);





function increment() {
    paperclips++;
}
