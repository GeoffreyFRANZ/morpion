var firstscore = 0,
    secondScore = 0
lastmove = 0
firstPlayer = "X" ,
    secondPlayer = 'O',
    count = 0,
    partcount = 0
cellules = document.querySelectorAll('td')
document.querySelector('#p1').classList.add('p1')
document.querySelector('#t2').classList.add('none')
for (cellule of cellules) {
    cellule.addEventListener('click', function () {
        if (this.innerHTML != '') {
            this.innerHTML = this.innerHTML
            alert('vous ne pouvez pas jouer cette case')
        }
        else {
            if (count % 2 == 0) {
                this.innerHTML = firstPlayer
                partcount += 1
                count += 1
                document.querySelector('#p2').classList.add('p2')
                document.querySelector('#p1').classList.remove('p1')
                document.querySelector('#t1').classList.add('none')
                document.querySelector('#t2').classList.remove('none')
                this.classList.add('dark')
            }
            else if (count % 2 !== 0) {
                this.innerHTML = secondPlayer
                count += 1
                partcount += 1
                document.querySelector('#p1').classList.add('p1')
                document.querySelector('#p2').classList.remove('p2')
                document.querySelector('#t2').classList.add('none')
                document.querySelector('#t1').classList.remove('none')
                this.classList.add('yoda')
            }
            let p1 = "X,X,X",
                p2 = "O,O,O"
            const victoryCondition =
            {
                vich1: [cellules[0].innerHTML, cellules[1].innerHTML, cellules[2].innerHTML].join(),
                vich2: [cellules[3].innerHTML, cellules[4].innerHTML, cellules[5].innerHTML].join(),
                vich3: [cellules[6].innerHTML, cellules[7].innerHTML, cellules[8].innerHTML].join(),
                vicd1: [cellules[0].innerHTML, cellules[4].innerHTML, cellules[8].innerHTML].join(),
                vicd2: [cellules[2].innerHTML, cellules[4].innerHTML, cellules[6].innerHTML].join(),
                vicv1: [cellules[0].innerHTML, cellules[3].innerHTML, cellules[6].innerHTML].join(),
                vicv2: [cellules[1].innerHTML, cellules[4].innerHTML, cellules[7].innerHTML].join(),
                vicv3: [cellules[2].innerHTML, cellules[5].innerHTML, cellules[8].innerHTML].join()
            }
            if (count >= 5) {
                for (k in victoryCondition) {
                    if (victoryCondition[k] === p1) {
                        lastmove += 1
                        console.log('p1 Win')
                        document.querySelector('#myTable').classList.add('none')
                        document.querySelector('#p1win').classList.remove('none')
                        firstscore += 1
                    }
                    else if (victoryCondition[k] === p2) {
                        console.log('p2 Win')
                        document.querySelector('#myTable', '#p1', '#p2').classList.add('none')
                        document.querySelector('#p2win').classList.remove('none')
                        secondScore += 1
                        lastmove += 1
                    }
                }
            }
                            if (partcount == 9) {
                                if (lastmove  == 0) {
                                    console.log('draw')
                                    document.querySelector('#myTable').classList.add('none')
                                    document.querySelector('#draw').classList.remove('none')
                                }
                            }
            document.querySelector('#p1score').innerHTML = `<p>score: ${firstscore}   </p>`
            document.querySelector('#p2score').innerHTML = `<p>score: ${secondScore}  </p>`
        }
    })
}
let btn = document.querySelector('button')
btn.addEventListener('click', function () {
    lastmove = 0
    partcount = 0
for (let cellule of cellules){
 cellule.innerHTML =''
 cellule.classList =''
}
    document.querySelector('#myTable').classList.remove('none')
    document.querySelector('#p1win').classList.add('none')
    document.querySelector('#p2win').classList.add('none')
    document.querySelector('#draw').classList.add('none')
})