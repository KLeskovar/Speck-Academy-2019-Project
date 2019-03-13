var ID;
var name;
var isReserved;
var reservedFrom;
var reservedUntil;

var hall = {
    ID,
    name,
    reservation: {
        isReserved,
        reservedFrom,
        reservedUntil
    }
};

let polje = new Array();

function add(ime){
	
	hall.ID=polje.length+1;
	hall.name = ime;
	hall.reservation.isReserved = true;
	hall.reservation.reservedFrom = Date.now();
	hall.reservation.reservedUntil = null;
    polje.push(hall);
}

function remove(id){
    polje.splice(id,1);
}

function reservation(id, reservedFromInput, reservedUntilInput){
    hall[id].reservation.isReserved = true;
	hall[id].reservation.reservedFrom = reservedFromInput;
	hall[id].reservation.reservedUntil = reservedUntilInput;
}

function checkReservation(id){
    if (polje[id].reservation.ReservedUntil < Date.now() ){
        polje[id].reservation.isReserved = false;
        polje[id].reservation.reservedFrom= null;
        polje[id].reservation.reservedUntil = null;
    }
}