'use strict';

class Prohlizec{
    constructor(){
        this._obrazky = document.querySelectorAll(".obrazky");

        this._onclickObrazky();
        this.vypis();
    }
    vypis(){
        console.log(this._obrazky);
    }
    _onclickObrazky(){
        for(const obrazek of this._obrazky){
            obrazek.onclick = () => {
                console.log(obrazek.alt);
            };
        }
    }
}