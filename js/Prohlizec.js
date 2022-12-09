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
                this.vlozitZobrazContainer(obrazek.cloneNode(true));
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
    vlozitZobrazContainer(obrazek){
        const container = this.vytvoritZobrazContainer();
        container.appendChild(this.vytvoritTlacitko("<"));
        container.appendChild(this.vytvoritImgContainer(obrazek));
        container.appendChild(this.vytvoritTlacitko(">"));
        document.body.appendChild(container);
    }
    vytvoritZobrazContainer(){
        const div = document.createElement("div");
        div.className = "aktivni";
        return div;
    }
    vytvoritTlacitko(symbol){
        const tlacitko = document.createElement("button");
        tlacitko.className = "ovl-tl";
        tlacitko.innerText = symbol;
        return tlacitko;
    }
    vytvoritImgContainer(img){
        const div = document.createElement("div");
        img.className = "akt-img";
        div.appendChild(img);
        
        return div;
    }
}