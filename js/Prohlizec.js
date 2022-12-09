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
                /*this._odebratAktivni();
                obrazek.classList.add("aktivni");*/
                this.vlozitZobrazContainer();
            };
        }
    }
    _odebratAktivni(){
        this._obrazky.forEach(obrazek => {
            obrazek.classList.forEach(trida => {
                if(trida === "aktivni") obrazek.classList.remove("aktivni");
            });
        });
    }
    vlozitZobrazContainer(){
        const container = this.vytvoritZobrazContainer();

        document.body.appendChild(container);
    }
    vytvoritZobrazContainer(){
        const div = document.createElement("div");
        div.className = "aktivni";

        return div;
    }
}