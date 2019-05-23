








paperclips       = 0;
paperclips_stock = 0;
paperclip_price  = 1;
euros            = 0;




var ui_element_ammount_paperclips;
var ui_element_available_funds;
var ui_element_unsold_inventory;

// Bucle principal, más o menos
setTimeout( function(){

    ui_element_ammount_paperclips = document.getElementById('ammount-paperclips');
    ui_element_available_funds    = document.getElementById('available-funds');
    ui_element_unsold_inventory   = document.getElementById('unsold-inventory');
    ui_element_paperclip_price    = document.getElementById('paperclip-price');

    setInterval(function() { update_ui(); }, 50);
}, 100);


// Se actualiza cada medio segundo
setTimeout( function(){
    setInterval(function() {
        if (paperclips_stock > 0) { paperclips_stock--; euros += paperclip_price; }
        euros = Math.round( euros * 10 ) / 10;
    }, 500);
}, 110);


function increment_by_one() {
    paperclips++;
    paperclips_stock++;
}

function paperclip_price_increase() {
    paperclip_price += 0.1;
    paperclip_price = Math.round( paperclip_price * 10 ) / 10; // Sí, es necesario
}

function paperclip_price_lower() {
    if (paperclip_price > 0.1 ) { paperclip_price -= 0.1; }
    paperclip_price = Math.round( paperclip_price * 10 ) / 10; // Sí, es necesario
}

function update_ui() {

    // if (paperclips_stock > 0) { paperclips_stock--; euros += paperclip_price; }
    ui_element_ammount_paperclips.innerHTML = "Paperclips :" + paperclips;
    ui_element_available_funds.innerHTML    = "Available funds : " + euros + "€";
    ui_element_unsold_inventory.innerHTML   = "Unsold inventory : " + paperclips_stock;
    ui_element_paperclip_price.innerHTML    = "Paperclip price : " + paperclip_price + "€";
}
