'use strict';

class ProhlizecObrazku{
    constructor(){
        this._obrazky = document.querySelectorAll(".obrazky");

        this.aktivniImg;
        this._onclickObrazky();
        this.vypis();
    }
    vypis(){
        console.log(this._obrazky);
    }
    _onclickObrazky(){
        for(const obrazek of this._obrazky){
            obrazek.onclick = () => {
                this.aktivniImg = obrazek;
                this.vlozitZobrazContainer();
            };
        }
    }
    _odebratAktivni(){
        this._obrazky.forEach(obrazek => {
            obrazek.classList.forEach(trida => {
                if(trida === "phrObr-aktivni") obrazek.classList.remove("phrObr-aktivni");
            });
        });
    }
    vlozitZobrazContainer(){
        if(document.querySelector(".phrObr-aktivni")) document.body.removeChild(document.querySelector(".phrObr-aktivni"));

        const container = this.vytvoritZobrazContainer();
        container.appendChild(this.vytvoritTlacitko("<"));
        container.appendChild(this.vytvoritImgContainer(this.aktivniImg.cloneNode(true)));
        container.appendChild(this.vytvoritTlacitko(">"));
        document.body.appendChild(container);
    }
    vytvoritZobrazContainer(){
        const div = document.createElement("div");
        div.className = "phrObr-aktivni";
        return div;
    }
    vytvoritTlacitko(symbol){
        const tlacitko = document.createElement("button");
        tlacitko.className = "ovl-tl";
        tlacitko.innerText = symbol;
        tlacitko.onclick = () => {
            this.posunObrazku(tlacitko.innerText);
        };
        return tlacitko;
    }
    vytvoritImgContainer(img){
        const div = document.createElement("div");
        img.className = "akt-img";
        div.appendChild(img);
        return div;
    }
    posunObrazku(symbol){
        const arrImg = Array.prototype.slice.call(this._obrazky);
        const imgIndex = arrImg.indexOf(this.aktivniImg);
        if(symbol === "<") {
            if(imgIndex === 0){
                this.aktivniImg = this._obrazky[this._obrazky.length-1];
            }
            else{
                this.aktivniImg = this._obrazky[imgIndex-1];
            }
        }
        if(symbol === ">"){
            if(imgIndex === this._obrazky.length-1){
                this.aktivniImg = this._obrazky[0];
            }
            else{
                this.aktivniImg = this._obrazky[imgIndex+1];
            }
        }
        this.vlozitZobrazContainer();
    }
}