








// Cosas generales
paperclips       = 0;
euros            = 10000;

// Ventas
paperclips_stock = 0;
paperclip_price  = 1;
marketing        = 1;
marketing_price  = 200;

// Cosas de la fábrica
wire                    = 90;
wire_price              = 1.2;
autoclippers            = 0;
autoclippers_efficiency = 1; // Wire consumido para hacer un clip
autoclippers_price      = 100; // Precio



// La ui en sí
var ui_element_ammount_paperclips;
var ui_element_available_funds;
var ui_element_unsold_inventory;
var ui_element_paperclip_price;
var ui_element_ammount_wire;
var ui_element_ammount_autoclippers;
var ui_element_price_wire;
var ui_element_price_autoclippers;

var ui_element_average_clips;











// Bucle principal, más o menos
setTimeout( function(){

    ui_element_ammount_paperclips   = document.getElementById('paperclips-ammount');
    ui_element_paperclip_price      = document.getElementById('paperclip-price');
    ui_element_average_clips        = document.getElementById('paperclip-average');
    ui_element_available_funds      = document.getElementById('available-funds');
    ui_element_unsold_inventory     = document.getElementById('unsold-inventory');

    ui_element_ammount_wire         = document.getElementById('wire-ammount');
    ui_element_price_wire           = document.getElementById('wire-cost');
    ui_element_ammount_autoclippers = document.getElementById('autoclippers-ammount');
    ui_element_price_autoclippers   = document.getElementById('autoclippers-cost');

    ui_element_ammount_marketing    = document.getElementById('marketing-ammount');
    ui_element_price_marketing      = document.getElementById('marketing-price');

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

        // Autoclippers !
        if (wire >= autoclippers_efficiency && autoclippers > 0)
        {
            wire -= autoclippers * autoclippers_efficiency;
            wire = Math.round( wire * 10 ) / 10;

            paperclips_stock += autoclippers * autoclippers_efficiency;
            paperclips       += autoclippers * autoclippers_efficiency;
            paperclips_stock = Math.round( paperclips_stock * 10 ) / 10;
            paperclips       = Math.round( paperclips * 10 ) / 10;
        }

}, 1000); }, 130);




// Funciones de compra
function buy_autoclipper() {
    if (euros >= autoclippers_price) {
        autoclippers++;
        euros -= autoclippers_price;
        euros = Math.round( euros * 10 ) / 10;
        autoclippers_price = price_linear(autoclippers, 100, 50);
    }
    // factory_autoclippers
}

function buy_wire() {
    if (euros >= wire_price) {
        wire++;
        euros -= wire_price;
        euros = Math.round( euros * 10 ) / 10;
    }
    // factory_autoclippers
}

function buy_marketing() {
    if (euros >= marketing_price) {
        marketing++;
        euros -= marketing_price;
        euros = Math.round( euros * 10 ) / 10;
        marketing_price = price_linear(marketing, 200, 450);
    }
}

function buy_upgrade(price, upgrade_function) {
    if (euros >= price) {
        euros -= price;
        upgrade_function();
        // this.parentNode.removeChild(this);
    }
}


// Otros
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



// Mejoras así a desbloquear
function autoclippers_increase_efficiency(ammount) {
    autoclippers_efficiency -= ammount;
}


// Gestión en sí
function price_linear(ammount, initial_price, increment) {
    return ammount * increment + initial_price;
}

function update_ui() {

    // if (paperclips_stock > 0) { paperclips_stock--; euros += paperclip_price; }
    ui_element_ammount_paperclips.innerHTML = "Paperclips :" + paperclips;
    ui_element_available_funds.innerHTML    = "Available funds : " + euros + "€";
    ui_element_unsold_inventory.innerHTML   = "Unsold inventory : " + paperclips_stock;
    ui_element_paperclip_price.innerHTML    = "Paperclip price : " + paperclip_price + "€";

    ui_element_ammount_wire.innerHTML         = "" + wire + " m";
    ui_element_price_wire.innerHTML           = wire_price+ "€";
    ui_element_ammount_autoclippers.innerHTML = "Autoclippers : " + autoclippers;
    ui_element_price_autoclippers.innerHTML   = autoclippers_price + "€";

    ui_element_average_clips.innerHTML        = "Average clips : " + autoclippers;

    ui_element_ammount_marketing.innerHTML    = "Level : " + marketing;
    ui_element_price_marketing.innerHTML      =  marketing_price+ "€";
}
