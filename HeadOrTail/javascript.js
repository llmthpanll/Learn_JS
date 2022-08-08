let round = prompt("คุณจะเล่นกี่รอบ")
for(var i = 1; i <= round;i++){
    var ans_player = prompt("หัว หรือ ก้อย")
    var ans = Math.floor(Math.random()*10)
    if(ans <= 4){
        //หัว
        random_answer = "หัว"
        // if(ans_player == random_answer){
        //     alert("คุณชนะ")
        // }
    }
    else{
        //ก้อย
        random_answer = "ก้อย"
        // if(ans_player == random_answer){
        //     alert("คุณแพ้")
        // }
    }
    if(ans_player == random_answer){
        // alert("คุณชนะ")
        document.getElementById("guess").innerHTML += "รอบที่ " + i + " เลือก : " + ans_player + "<br>"
        document.getElementById("game-list").innerHTML += "รอบที่ " + i + " : คุณชนะ" + "<br>"
    }
    else{
        // alert("คุณแพ้")
        document.getElementById("guess").innerHTML += "รอบที่ " + i + " เลือก : " + ans_player + "<br>"
        document.getElementById("game-list").innerHTML += "รอบที่ " + i + " : คุณแพ้" + "<br>"
    }
}