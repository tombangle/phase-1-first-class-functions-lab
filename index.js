const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0,2);
};

const returnLastTwoDrivers = (drivers) => {
    return drivers.slice (-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (multiplier) => {
    return (fare) => {
        return fare * multiplier;
    };
};

const fareDoubler = createFareMultiplier(2); 

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (drivers, driverFunction) => {
    return driverFunction(drivers);
};

const arrayOfDrivers = [`Antonia`, `Nuru`, `Amari`, `Mo`];

console.log(returnFirstTwoDrivers(arrayOfDrivers));
console.log(returnLastTwoDrivers(arrayOfDrivers));
console.log(fareDoubler(10));
console.log(fareTripler(10));
console.log(selectDifferentDrivers(arrayOfDrivers, returnFirstTwoDrivers));
console.log(selectDifferentDrivers(arrayOfDrivers, returnLastTwoDrivers));

