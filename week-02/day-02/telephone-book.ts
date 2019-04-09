let map: any = {
    'William A. Lathan': '405-709-1865',
    'John K. Miller': '402-247-8568',
    'Hortensia E. Foster': '606-481-6467',
    'Amanda D. Newland': '319-243-5613',
    'Brooke P. Askew': '307-687-2982',
}

//John K. Miller
console.log('John K. Miller\'s phone: ' + map['John K. Miller']);
console.log('Whose number is : 307-687-2982 ' + Object.keys(map).filter(function (element) { return map[element] === '307-687-2982'})[0]);

export { };

