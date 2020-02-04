var Mijnauto = {
    merk: "ford",
    kleur : "blauw",
    snelheid: 0,

    gasgeven: function() {
        this.snelheid += 5
        console.log(this.snelheid)
    },
    toeteren:function(){
        console.log("TOET!")
    }
}
console.log(Mijnauto.kleur);
Mijnauto.gasgeven();
Mijnauto.gasgeven();
Mijnauto.gasgeven();
Mijnauto.gasgeven();
Mijnauto.toeteren();

