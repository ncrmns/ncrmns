'use strict';
interface Reservationy {
  getDowBooking(): string;
  getCodeBooking();
}

class Reservations implements Reservationy {

  getDowBooking(): string {
    let dowarr: string[] = ['MON', 'TUE', 'WED', 'THU', 'FRY', 'SAT', 'SUN']
    return dowarr[Math.floor(Math.random() * 6)];
  }
  getCodeBooking():string {
    let random: string = '';
    let chararr: string[] = [];
    //gets ABC from ASCII
    for (let i: number = 65; i < 91; i++) {
      chararr.push(String.fromCharCode(i));
    }
    //adds numbers
    for (let i:number=0; i<10; i++){
      chararr.push(i.toString());
    }
    //crates 8 char long string with random elements of 'chararr'
    for (let i:number=0; i<8; i++){
      random += chararr[Math.floor(Math.random() * 35)];
    }
    return random;
  }

  getReservation():void{
    // Booking# 1WBA3OMU for THU
    let restext: string[] = [
      'Booking#',
      this.getCodeBooking(),
      'for',
      this.getDowBooking()
    ]
    console.log(restext.join(' '));
  }
}

let res = new Reservations();
res.getReservation();
res.getReservation();
res.getReservation();
res.getReservation();
res.getReservation();
res.getReservation();
res.getReservation();
res.getReservation();