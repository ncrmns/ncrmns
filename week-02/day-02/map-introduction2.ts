let map: any = {
    '978-1-60309-452-8': 'A Letter to Jo',
    '978-1-60309-459-7': 'Lupus',
    '978-1-60309-444-3': 'Red Panda and Moon Bear',
    '978-1-60309-461-0': 'The Lab'
};


for (let i = 0; i < Object.keys(map).length; i++) {
    console.log(Object.values(map)[i] + ' (ISBN: ' + Object.keys(map)[i] + ')');
}
console.log(Object.keys(map));
delete map['978-1-60309-444-3'];
console.log(Object.keys(map).filter(function (element) { return map[element] === 'The Lab' }));
delete map[Object.keys(map).filter(function (element) { return map[element] === 'The Lab' })[0]];
export { };