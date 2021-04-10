class L1 {

    removeFalsyValues(mas) {

        let newMas = [];

        for (let item of mas) {
            if( Array.isArray(item) ){
               throw new Error("Элемент массив"); 
            }
            
            if (item) {
                newMas.push(item);
            }
        }

        return newMas;
    }
}

module.exports = { L1 };

//let l = new L1();

//let k = l.removeFalsyValues([45, '', 0, 'hello', 4.7, [],false]);
//console.log(k);