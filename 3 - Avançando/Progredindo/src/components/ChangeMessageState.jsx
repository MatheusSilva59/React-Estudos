const ChangeMessageState = ({ handleMessage }) => {
    const messages = ['The test has succeeded.', 'The test has been failed during the intermediate stage.']

    return (
        <div>
            <button onClick={() => handleMessage(messages[0])}>First message</button>
            <button onClick={() => handleMessage(messages[1])}>Second message</button>
        </div>
    )
}

export default ChangeMessageState