let flag = false;

  
function getNumbers(min, max){
    let arr = [];
    for(let k = min; k < max+1; k++) {
        arr.push(k);
    }
    console.log(arr)
    arr.sort(() => Math.random() - 0.5);

    return arr;
}

function print() {
    if(!flag) {
        alert("No se ha generado la cartilla")
        return
    }
    let quality = 1 ;
    const filename  = 'cartilla.pdf';

    html2canvas(document.querySelector('.card-container'), 
                            {scale: quality}
                     ).then(canvas => {
        let pdf = new jsPDF('p', 'mm', 'a4');
        pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 40, 50);
        pdf.save(filename);
    });
}

function fillColumn(class_, min, max){
    
    let elems =document.getElementsByClassName(class_);
    let numbers = getNumbers(min, max);
    for(let k =0 ; k < elems.length; k++) {
        let randomIndex = Math.floor(Math.random()*numbers.length)
        elems[k].textContent = numbers[randomIndex];
        numbers.splice(randomIndex, 1);
    }
        
}


function generateCard(){
    flag = true;
    fillColumn('b', 1, 15);
    fillColumn('i', 16, 30);
    fillColumn('n', 31, 45);
    fillColumn('g', 46, 60);
    fillColumn('o', 61, 75);
}