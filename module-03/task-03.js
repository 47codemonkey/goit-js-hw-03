"use strict";

const findBestEmployee = object => {
    let highestScore = 0;
    let bestEmployee;
    for (const key in object) {
        if (object[key] >= highestScore) {
            highestScore = object[key];
            bestEmployee = key;
        }
    }
    return bestEmployee;
};

console.log(
    findBestEmployee({
        ann: 29,
        david: 35,
        helen: 1,
        lorence: 99
    })
);

console.log(
    findBestEmployee({
        poly: 12,
        mango: 17,
        ajax: 4
    })
);

console.log(
    findBestEmployee({
        lux: 147,
        david: 21,
        kiwi: 19,
        chelsy: 38
    })
);