
let a

function eye() {

    if (a==1) {

        document.getElementById('one').style.zIndex='2'
        document.getElementById('two').style.zIndex='2'
        
        return a=0
    }
    
    else {

        document.getElementById('one').style.zIndex='-1'
        document.getElementById('two').style.zIndex='-1'

        return a=1
    }
}
