class ejercicios_sin_ciclos{
    ejercicio_1(){
        //Sumar dos numeros siempre cuando el primero sea mayor al segundo
        let num1 = Math.floor(Math.random()*10)
        let num2 = Math.floor(Math.random()*10)
        console.log(`primero ${num1} segundo ${num2}`)
        if(num1 > num2){
            let suma = num1 + num2
        console.log(`La suma es: ${suma}`)
        }if(num1 < num2){
            console.log("Error, el primero es menor")
        }if(num1 === num2){
            console.log("Error, los numeros son iguales ")
        }
    }
    ejercicio_2(){
        //Realizar una operacion segun el operador(+,-,*,/,%) realizar la suma, resta, multiplicacion, division y reciduo
        let num1 = Math.floor(Math.random()*10)
        let num2 = Math.floor(Math.random()*10)
        console.log(`${num1} ; ${num2}`)
        let suma = num1 + num2
        console.log(`La suma es: ${suma}`)

        let resta = num1 - num2
        console.log(`La resta es: ${resta}`)

        let multiplicacion = num1 * num2
        console.log(`La multiplicacion es: ${multiplicacion}`)

        let divicion = num1 / num2
        console.log(`La divicion es: ${divicion}`)

        let residuo = num1 % num2
        console.log(`El resiuduo es: ${residuo}`)
    }
    ejercicio_3(){
        //presentar el mayor de dos numeros 
        let num1 = Math.floor(Math.random()*30)
        let num2 = Math.floor(Math.random()*30)
        console.log(`${num1} ; ${num2}`)
        if(num1 > num2){
            console.log(`El mayor es ${num1}`)
        }if(num1 === num2){
            console.log("los numeros son iguales")
        }if(num1 < num2){
            console.log(`El mayor es ${num2}`)
        }
    }
    ejercicio_4(){
        //Dado un nombre presentarlo
        let nombre = "Chica"
        if(typeof  nombre === 'string' ){
            console.log("Es un nombre")
        }else{
            console.log("No es un nombre")
        }
    }
    ejercicio_5(){
        //Dado un valor de compra presentar el total considerando un 12% de iva
        
        let num1 = Math.floor(Math.random()*50)
        console.log(`El valor del producto es: ${num1}`)
        let num2 = 0.12*num1
        let num3 = num1 + num2

        console.log(`El iva es de: ${num2}`)
        console.log(`el total a pagar es: ${num3}`)
    }
}
class ejercicios_con_ciclos{
    ejercicio_6(){
        //Presentar 5 veces un nombre
        console.log("Ingrese un nombre")
        let num1 = "Alex" 

        for(let i = 0; i < 5 ; i++ ){
            console.log(`${num1}`)
        }
    }
    ejercicio_7(){
       //Presentar los numeros multiplos de 3, del 3 al 21.
        for (let i = 3; i <= 21; i++) {
            if (i % 3 == 0) {
            console.log(i)
            }
        } 
    }
    ejercicio_8(){
        //Presentar los numeros multiplos de 3 del 21 al 3
        for (let i = 21; i >= 3; i--) {
            if (i % 3 == 0){
            console.log(i)
            }
        }
    }
    ejercicio_9(){
        //Dados dos nombres indicar si son iguales o diferentes
        let num1 = "CHICA"
        let num2 = "chica"

        if (num1.localeCompare(num2,  `en`, {sensitivity:  `base`}) === 0){
            console.log(`(${num1}) es igual a: (${num2})`)
        }else{
            console.log(`(${num1}) no es igual a: (${num2})`)
        }
    }
    ejercicio_10(){
     //Dado diez numeros en un arreglo presentar los que tengan menos de 5 caracteres
        const numeros = [45, 7, 102, 39, 84, 2, 159452, 6987653, 321987, 76];

        for (let i = 0; i < numeros.length; i++) {
            if (numeros[i].toString().length < 5){
                console.log(numeros[i])
            }
        }
    }
    ejercicio_11(){
        //Dado un arreglo presentar sus elementos

        let arreglo = [1,2,3,4,5,6,7,8,9]

        for (let i = 0 ; i <= 8 ; i++){
            console.log(arreglo[i])
        }
    }
    ejercicio_12(){
        //Dado un arreglo de numeros presentar los menores a 10


        let arreglo = [8,40,5,100,9,10,4]

        for(let i = 0 ; i <= 99 ; i++){
            if(arreglo[i] < 10 ){
                console.log(arreglo[i])
            }
        }
    }
    ejercicio_13(){
        //Dado un arreglo de numeros presentar los impares y al final la suma de los pares
        const numeros = [3, 8, 12, 7, 9, 2, 5, 10, 6]

        let sumaPares = 0

        for (let i = 0; i < numeros.length; i++) {
            if (numeros[i] % 2 === 0) {
                sumaPares = sumaPares+numeros[i]
                
            } else {
                console.log(numeros[i])
            }
        }
        console.log(`La suma de los números pares es: ${sumaPares}`)
    }
    ejercicio_14(){
        //Presentar el primero el medio y el ultimo valor de un arreglo
        const numeros = [1, 2, 3, 4, 5, 6, 7, , 9]

        let primero = numeros[0]
        let medio = numeros[Math.floor(numeros.length / 2)]
        let ultimo = numeros[numeros.length - 1]
        

        console.log(`El primer valor es: ${primero}`)
        console.log(`El valor del medio es: ${medio}`)
        console.log(`El último valor es: ${ultimo}`)
        
    }
    ejercicio_15(){
        //15) Calcular el vuelto de un a compra dado el costo y el pago
        let num1 = Math.floor(Math.random()*50)
        console.log(`El costo del producto es de: ${num1}`)

        let num2 = Math.floor(Math.random()*50) 
        console.log(`el pago es de: ${num2}`)
        
        if (num1 < num2){
            let vuelto = num2-num1
            console.log(`el vuelto es de: ${vuelto}`)
        }if (num1 === num2){
            console.log("No hay vuelto")
        }if(num2 < num1){
            let falta = num1 - num2
            console.log(`Falta de pagar: ${falta}`)
        }
    }
    ejercicio_16(){
        // 16) Presentar la tabla de multiplicar de cualquier numero del 1 al 12
        // 	ejemplo: num=5
        //                    respuesta= 5*1=5
        //                                         5*2=10
        //                                    .... 5*12=60

        let num1 = Math.floor(Math.random()*10)
        console.log(`Tabla del ${num1}`)
        for(let i =0; i <= 12;i++ ){
            let resultado = num1*i
            console.log(`${num1} x ${i} = ${resultado}`)
        }
    }
    ejercicio_17(){
        //17) Realizar la multiplicacion de dos numeros por medio de sumas sucesivas
        let num1 = 5
        let num2 = 3
        let resultado = 0
        for (let i =0; i < num2 ; i++){
            resultado = resultado + num1
            console.log (`${num1} + ${resultado}`)
        }
    }
    ejercicio_18(){
        //18)Realizar la division de dos numeros por medio de restas sucesivas
        // ejemplo: n1=5  n2=2
        //               5-2=3
        //               3-2=1
        //        respuesta: cociente=2 reciduo=1
        let num1=5
        let num2=2
        let cociente = 0;
        while (num1 >= num2) {
        num1 = num1 - num2
        cociente++
        }
        console.log(`el reciduo es ${num1}`)
        console.log(`el cociente es ${num2}`)
    }
    ejercicio_19(){
        //19)Calcular el factorial de un numero
        let num1 = 4
        let total = 1
        for(let i = 1;i <= num1;i++ ){
            total = total*i
        }
        console.log(total)
    }
    ejercicio_20(){
        // 20)Calcular el exponente de un numero
        let num1 = 4
        let num2 = 3
        let resultado = 1 
        for(let i = 0; i < num2; i++  ){
            resultado = resultado * num1
        }
        console.log(resultado)

    }
    ejercicio_21(){
        //21)Calcular la serie de fibonacci dado un numero
        let a=0,b=1,c = 1,cont=2,n=8
        console.log(a,b,c)
        while(cont < n){
            a=b
            b=c
            c= a+b
            console.log(c)
            cont=cont+1
        }
    }
    ejercicio_22(){
        //22) Dado un numero invertirlo
        let num1= 12356
        let num2
        console.log(`Numero: ${num1}`)
        while(num1>0){
            num2=Math.floor(num1%10)
            num1=Math.floor(num1/10)
            console.log(num2)
        }
    }
    ejercicio_23(){
        //23) Presentar los divisores de un numero
        let num1 = 8
        let contador = 1
        while(contador<num1){
            if(num1%contador==0){
                console.log(contador)
            }
            contador=contador+1
        }
    }
    ejercicio_24(){
        // 24) Presentar si un numero es perfecto o no (Perfecto:cuando la suma de los 
        //     divisores incluidos el 1 y excluido el propio numero dada igual al numero)
        let num1 = 6 
        let sumaDivisores = 0
        for (let i = 1; i < num1; i++) {
        if (num1 % i === 0) {
            sumaDivisores += i
        }
        }
        if (sumaDivisores === num1) {
        console.log(num1 + " es un número perfecto.")
        }else {
        console.log(num1 + " no es un número perfecto.")
        }

    }
    ejercicio_25(){
        // 25) Verfificar si un numero es primo o no(Primo cuando solo es divsivible 
        //     para 1 y el propio numero, es decir no tenga divisores)
        let num = 7
        let esPrimo = true
        for (let i = 2; i < num; i++) {
        
        
            if (num % i === 0) {
                esPrimo = false
                
            }
        }

        if (esPrimo) {
        console.log(num + " es un número primo.")
        } else {
        console.log(num + " no es un número primo.")
        }
    }
}


let g = new ejercicios_sin_ciclos()


let h = new ejercicios_con_ciclos()
