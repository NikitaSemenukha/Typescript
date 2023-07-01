class Vehicle {
    run: number;
}

function kmToMiles<T extends Vehicle>(vehicle: T): T {
    vehicle.run = vehicle.run / 0.62;
    return vehicle;
}

class LSV extends Vehicle {
    capacity: number;
}

const vehicle = kmToMiles(new Vehicle());
const lsv = kmToMiles(new LSV());
kmToMiles({ run: 1 });


function logId<T extends string | number, Y>(id: T, additionalData: Y): { id: T, data: Y } {
    console.log(id);
    console.log(additionalData);
    return { id, data: additionalData };
}
