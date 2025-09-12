function* conis(){
    yield "coin1"
    yield "coin2"
    yield "coin3"
    yield "coin4"
    yield "coin6"
    yield "coin7"
    yield "coin5"
   
    return "that All "

}
var con=conis()
console.log(con.next().value);
console.log(con.next().value);
console.log(con.next().value);
console.log(con.next().value);
console.log(con.next().value);
console.log(con.next().value);
console.log(con.next().value);
console.log(con.next().value);
console.log(con.next().value);

