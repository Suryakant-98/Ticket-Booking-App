export interface Station {
    stationID: number,
    stationName: string,
    stationCode: string
}

export interface ResModel {
    message: string,
    result: boolean,
    data: any
}

export class Passenger {
    passengerID: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;

    constructor() {
        this.passengerID = 0;
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.phone = '';
        this.password = '';
    }
   }