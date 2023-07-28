var check = document.querySelector('#check')
var box = document.querySelector('.boxi')
var ball = document.querySelector('.ball')

check.addEventListener('change', function(){
    if(this.checked == true){
        box.setAttribute('style', "background-color:white;")
        ball.setAttribute('style', "transform:translate(100%);")
        document.body.setAttribute('style', "background-color:black; color:white");
    }
    if(this.checked == false){
        box.setAttribute('style', "background-color:black;")
        ball.setAttribute('style', "transform:translate(0%);")
        document.body.setAttribute('style', "background-color:white");
    }
})