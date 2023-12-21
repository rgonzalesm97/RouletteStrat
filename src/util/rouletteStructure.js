class Nodo {
    constructor(nombre) {
        this.nombre = nombre;
        this.siguiente = null;
    }
}

export class RouletteStructure {
    constructor() {
        this.primero = null;
    }

    agregar_numero(nombre) {
        let nuevoNodo = new Nodo(nombre)
        if (!this.primero) {
            this.primero = nuevoNodo
            nuevoNodo.siguiente = this.primero
        } else {
            let nodoActual = this.primero
            while (nodoActual.siguiente != this.primero) nodoActual = nodoActual.siguiente
            nodoActual.siguiente = nuevoNodo
            nuevoNodo.siguiente = this.primero
        }
    }

    visualizar() {
        if (!this.primero) console.log("La estructura esta vacía")

        let nodoActual = this.primero
        // eslint-disable-next-line no-constant-condition
        while (true) {
            console.log(nodoActual.nombre + " ->")
            nodoActual = nodoActual.siguiente
            if (nodoActual == this.primero) break
        }
    }

    extrac_possibles(actual, wheelNumbers) {
        let nodoActual = this.primero
        let result = []
        while (nodoActual.nombre != actual) nodoActual = nodoActual.siguiente

        for (let n of wheelNumbers) {
            let nodoIterable = nodoActual
            for (let i = n; i > 0; i--) {
                nodoIterable = nodoIterable.siguiente
            }
            result.push(nodoIterable.nombre)
        }
        return result
    }

    count_to_next(actual, next) {
        let nodoActual = this.primero
        let count = 0
        while (nodoActual.nombre != actual) nodoActual = nodoActual.siguiente
        while (nodoActual.nombre != next) {
            nodoActual = nodoActual.siguiente
            count++
        }
        return count
    }
}