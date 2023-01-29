function MovingTitle(writeText, interval, visibleLetters) {

    let instance = {}

    let currId = 0
    let numberOfLetters = writeText.length

    function updateTitle() {

        currId += 1

        if (currId > numberOfLetters - 1) currId = 0

        let startId = currId
        let endId = startId + visibleLetters
        let finalText

        if (endId < numberOfLetters - 1) {
            finalText = writeText.substring(startId, endId)
        }
        else {
            let cappedEndId = numberOfLetters
            endId = endId - cappedEndId

            finalText = writeText.substring(startId, cappedEndId) + writeText.substring(0, endId)
        }

        document.title = finalText
    }

    instance.init = () => setInterval(updateTitle, interval)

    return instance
}

let title = new MovingTitle("P L A N A T E ------🪐------", 300, 100)

title.init()