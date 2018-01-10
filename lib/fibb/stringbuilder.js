class StringBuilder{
    constructor(){
        this.value = [];
    }

    put(val){
        this.value.push(val);
        return this;
    }

    insert(val, pos){
        if(pos > this.value.length-1){
            this.value.push(val);
        }else if(pos < 0){
            throw new Error('Impossible Index');
        }else this.value.splice(pos, 0, val);
        return this;
    }

    isEmpty(val){
        if (val == "") {
            return true;
        }
    }

    empty(){
        this.value = [];
        return this;
    }

    finalBuild(){
        if(this.isEmpty(this.value) === true){ return "Empty string"}
        else {
            let totalStr = this.value.join(" ");
            return totalStr;
        } 
    }
}
// console.log((new StringBuilder).put('jules').put('jake').insert('james', 3).finalBuild())
module.exports = new StringBuilder;