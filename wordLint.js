let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

const storyWords = story.split(' ')
console.log(storyWords.length)



const betterWord = storyWords.filter(word =>{
   return !unnecessaryWords.includes(word)
})
console.log(betterWord)

let reallyCount = 0
let veryCount = 0
let basicallyCount = 0

for(let word of betterWord)
if(word === 'really'){
    reallyCount++
}

else if(word === 'very'){
    veryCount++
}

else if(word === 'basically'){
    basicallyCount++
}


let howManySentences = 0
for(let endOfSentence of betterWord){
    if(endOfSentence[endOfSentence.length -1] === '.' || endOfSentence[endOfSentence.length -1] === '!'){
        howManySentences++
    }
 
}




console.log(`You have used the word Really: ${reallyCount}. `)
console.log(`You have used the word Very: ${veryCount}. `)
console.log(`You have used the word Basically: ${basicallyCount}. `)
console.log(`How many sentences are there: ${howManySentences}`)
console.log(betterWord.join(' '))


// For the overused words, remove it every other time it appears.

// Write a function that finds the word that appears the greatest number of times.

// Replaced overused words with something else.