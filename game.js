








// Cosas generales
paperclips       = 0;
euros            = 10;

// Ventas
paperclips_stock = 0;
paperclip_price  = 1;

// Cosas de la fábrica
wire                    = 90;
wire_price              = 1.2;
autoclippers            = 0;
autoclippers_efficiency = 1; // Clips por segundo que generan
autoclippers_price      = 100; // Precio




var ui_element_ammount_paperclips;
var ui_element_available_funds;
var ui_element_unsold_inventory;
var ui_element_paperclip_price;
var ui_element_ammount_wire;
var ui_element_ammount_autoclippers;
var ui_element_price_wire;
var ui_element_price_autoclippers;

// Bucle principal, más o menos
setTimeout( function(){

    ui_element_ammount_paperclips   = document.getElementById('ammount-paperclips');
    ui_element_available_funds      = document.getElementById('available-funds');
    ui_element_unsold_inventory     = document.getElementById('unsold-inventory');
    ui_element_paperclip_price      = document.getElementById('paperclip-price');

    ui_element_ammount_wire         = document.getElementById('ammount-wire');
    ui_element_price_wire           = document.getElementById('cost-wire');
    ui_element_ammount_autoclippers = document.getElementById('ammount-autoclippers');
    ui_element_price_autoclippers   = document.getElementById('cost-autoclippers');

    setInterval(function() { update_ui(); }, 50);
}, 100);


// Se actualiza cada medio segundo
setTimeout( function(){ setInterval(function() {

        // paperclips += autoclippers * autoclippers_efficiency;

        if (paperclips_stock > 0) { paperclips_stock--; euros += paperclip_price; }
        euros = Math.round( euros * 10 ) / 10;

}, 500); }, 110);

// Se actualiza cada segundo
setTimeout( function(){ setInterval(function() {

        paperclips_stock += autoclippers * autoclippers_efficiency;
        paperclips       += autoclippers * autoclippers_efficiency;

        // if (paperclips_stock > 0) { paperclips_stock--; euros += paperclip_price; }
        // euros = Math.round( euros * 10 ) / 10;

}, 1000); }, 130);

function buy_autoclipper() {
    if (euros >= autoclippers_price) {
        autoclippers++;
        euros -= autoclippers_price;
    }
    // factory_autoclippers
}

function buy_wire() {
    if (euros >= wire_price) {
        wire++;
        euros -= wire_price;
    }
    // factory_autoclippers
}

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

    ui_element_ammount_wire.innerHTML         = "" + wire + " m";
    ui_element_price_wire.innerHTML           = "Price : " + wire_price;
    ui_element_ammount_autoclippers.innerHTML = "Autoclippers : " + autoclippers;
    ui_element_price_autoclippers.innerHTML   = "Price : " + autoclippers_price + "€";
}
