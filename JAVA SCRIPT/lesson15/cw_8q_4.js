
function Ship(draft,crew) {
    this.draft = draft;
    this.crew = crew;
}

Ship.prototype.isWorthIt = function(){
    if(this.draft>20 && this.crew == 0){
        return true;
    }else{
        return false;
    }
}