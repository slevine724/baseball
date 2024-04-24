function generateRandomNumber(num) {
    return Math.floor(Math.random()* num)
    };
    
    const allBaseball = {
    onBase: ['bases are loaded!', 'bases are empty.', 'runner is on third.', 'runner is on second.', 'runner is on first.'],
    hitResult: ['HOME RUN', 'single', 'double', 'triple'],
    crowdReact: ['wild', 'silent', 'crazy', 'home']
    };
    
    let personalResult = [];
    
    for(let key in allBaseball) {
        let optionID = generateRandomNumber(allBaseball[key].length)
    
        switch(key) {
            case 'onBase':
                personalResult.push(`The ${allBaseball[key][optionID]}`)
                break
            case 'hitResult':
                personalResult.push(`You hit a ${allBaseball[key][optionID]}!`)
                break
            case 'crowdReact':
                personalResult.push(`The crowd goes ${allBaseball[key][optionID]}!`)
        }
    }
    
    function baseballResult() {
        let formattedResult = personalResult.join(' ')
        console.log(formattedResult)
    };
    baseballResult();