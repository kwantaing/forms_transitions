import React, { useState } from "react"
import { navigate } from "gatsby"
import "../css/global.css"

const UserForm = props => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const createUser = e => {
    e.preventDefault()
    const newUser = { username, email, password }
    console.log("Welcome", newUser)
    navigate("/welcome", {
      state: { User: newUser },
    })
  }

  return (
    <div style={{ textAlign: "center", margin: "auto" }}>
      <form className="userform" onSubmit={createUser}>
        <div>
          <label>UserName: </label>
          <input type="text" onChange={evt => setUsername(evt.target.value)} />
        </div>
        <div>
          <label>Email: </label>
          <input type="text" onChange={evt => setEmail(evt.target.value)} />
        </div>
        <div>
          <label>Password: </label>
          <input type="password" onChange={evt => setPassword(evt.target.value)} />
        </div>
        <input type="submit" value="Create User" />
      </form>
    </div>
  )
}

export default UserForm
