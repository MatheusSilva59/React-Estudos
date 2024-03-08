import { useState } from 'react'
import './MyForm.css'

const MyForm = ({user}) => {
    // 6 - Controlled Inputs

    // 3 - gerencimaneto de dados

    const [name, setName] = useState(user ? user.name : '')
    const [email, setEmail] = useState(user ? user.email : '')
    const [bio, setBio] = useState(user ? user.bio : '')
    const [role, setRole] = useState(user ? user.role : '')

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name)
        console.log(email)
        console.log(bio)
        console.log(role)

        // 7 - Limpando form após o envio

        setName('')
        setEmail('')
        setBio('')
        setRole('')
    }

    return (
        <div>
            {/* 5 - Envio de forms */}

            {/* 1 - Criação de form */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" placeholder='Type your name' onChange={handleName} value={name}/>
                </div>

                {/* 2 - Label envolvendo */}
                <label>
                    <span>E-mail</span>
                    {/* 4 - Simplificação de manipulação de state */}
                    <input type="email" name="email" placeholder='Type your e-mail.' onChange={(e) => setEmail(e.target.value)} value={email}/>
                </label>

                {/* 8 - textarea */}
                <label>
                    <span>Bio: </span>
                    <textarea name="bio" cols="30" rows="10" placeholder='User description.' onChange={(e) => {setBio(e.target.value)}} value={bio}></textarea>
                </label>
                {/* 9 - Select */}

                <label>
                    <span>System function:</span>
                    <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                        <option value="user">User</option>
                        <option value="editor">Editor</option>
                        <option value="admin">Administrator</option>
                    </select>
                </label>

                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default MyForm