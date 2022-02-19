let poker: number[] = []
function 撲克牌洗牌_跳過 (跳過の數: number) {
    poker = []
    for (let index = 0; index <= 12; index++) {
        for (let index2 = 0; index2 < 4; index2++) {
            poker.insertAt(randint(0, 0 - poker.length), index + 1)
        }
    }
    for (let index = 0; index < 4; index++) {
        poker.removeAt(poker.indexOf(跳過の數))
    }
}
basic.forever(function () {
	
})
