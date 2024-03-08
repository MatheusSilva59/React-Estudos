import React, { useMemo, useRef, useState } from 'react'
import CoreGame from './CoreGame'

const Game = ({ words, handlePage, handleMainScore }) => {

    const [availableIndex, setAvailableIndex] = useState(words.map((item, index) => index))

    const [score, setScore] = useState(0)
    const [wordScore, setWordScore] = useState(0)
    const [attempt, setAttempt] = useState(3)
    const [usedLetters, setUsedLetters] = useState([])
    const [usedRightLetters, setUsedRightLetters] = useState([])
    const [currentLetter, setCurrentLetter] = useState('')
    const [currentWord, setCurrentWord] = useState()

    const getRandomWord = (e) => {
        const index = Math.floor(Math.random() * (availableIndex.length))
        const temp = availableIndex[index]
        availableIndex.splice(index, 1)
        if (temp != undefined){
            setCurrentWord(words[temp].word.split(''))
            return temp
        }
        else{
            handlePage('GameWin')
        }
        return currentIndex
    }
    
    const [currentIndex, setCurrentIndex] = useState(() => getRandomWord())

    const tempId = useMemo(() => {
        return Math.random()
    }, [currentIndex])

    function animation(element, steps, start, end, time, searchIndex, letter, aux = start, count = 0, diff = Math.abs(start - end)) {
        if (start < end) {
            aux += diff / steps
        }
        else {
            aux -= diff / steps
        }

        count++

        searchIndex.forEach((idx) => {
            element.childNodes[idx].style.transform = `rotateY(${aux}deg)`
        })


        if (count === steps / 2 || steps === 1) {
            searchIndex.forEach((idx) => {
                element.childNodes[idx].style.color = 'black'
                element.childNodes[idx].innerHTML = letter.toUpperCase()
            })
        }

        if (aux != end) {

            setTimeout(() => {
                animation(element, steps, start, end, time, searchIndex, letter, aux, count)
            }, time)
        }
        else{
            console.log(wordScore)
            console.log(currentWord.length)
            if (wordScore + searchIndex.length === currentWord.length) {
                setTimeout(() => {
                    setCurrentIndex(getRandomWord())
                    setScore((prev) => {
                        return prev + 1
                    })
                    setWordScore(0)
                    setUsedLetters([])
                    setUsedRightLetters([])
                    handleMainScore(1)
                }, 1000)
                console.log('NEW WORD')
            }
        }
    }

    function isThereLetter(searchLetter) {
        const word = currentWord
        const searchIndex = []

        word.forEach((letter, idx) => {
            if (searchLetter === letter) {
                searchIndex.push(idx)
                setWordScore((prev) => { return prev + 1 })
            }
        })

        return searchIndex
    }

    const handlePlay = (e) => {

        if (form.current.checkValidity()) {
            e.preventDefault()
            const element = letters.current
            const steps = 180
            const time = 5
            const start = 180
            const end = 0
            const searchIndex = isThereLetter(currentLetter.toLocaleLowerCase())

            if (searchIndex.length != 0) {
                setUsedRightLetters((prev) => {
                    return [...prev, currentLetter.toUpperCase()]
                })
                animation(element, steps, start, end, time, searchIndex, currentLetter.toUpperCase())
            }
            else {
                setAttempt((prev) => {
                    return prev - 1
                })
                setUsedLetters((prev) => {
                    return [...prev, currentLetter.toUpperCase()]
                })
                if(attempt - 1 === 0){
                    handlePage('GameOver')
                }
            }
            clearLetter()
        }
    }

    const handleInput = (e) => {
        try {
            setCurrentLetter(e.target.value.toUpperCase())
        }
        catch {
            setCurrentLetter(e.target.value)
        }
    }

    const clearLetter = () => {
        setCurrentLetter('')
        input.current.focus()
    }

    const letters = useRef()
    const input = useRef()
    const form = useRef()

    return (
        <div className='block-game'>
            <div>
                <p>Pontuação: {score}</p>
                <h1>Adivinhe a palavra:</h1>
                <h2>Dica sobre a palavra: <span>{words[currentIndex].tip}</span></h2>
                <p>Você ainda tem {attempt == 1 ? "1 tentativa" : attempt + " tentativas"}</p>
            </div>
            <CoreGame word={currentWord} letters={letters} tempId={tempId}/>
            <div className='letter-input-block'>
                <p>Tente adivinhar uma letra da palavra:</p>
                <form ref={form}>
                    <label>
                        <input type="text" maxLength="1" onChange={handleInput} value={currentLetter} ref={input} required pattern={`^(?![${usedLetters.join('')}, ${usedRightLetters}])[A-Za-zÀ-ú]+$`} title='Caracter repetido ou inválido.' />
                    </label>
                    <button type='submit' onClick={handlePlay}>JOGAR!</button>
                </form>
                <p>Letras já utilizadas:</p>
                <p>
                    {
                        usedLetters.length != 0 ?
                            usedLetters.map((letter, idx) => (
                                <span key={idx}>{idx != 0 ? ", " : ''}{letter}</span>
                            ))
                            :
                            usedLetters
                    }
                </p>
            </div>
        </div>
    )
}

export default Game