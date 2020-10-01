import React from "react"
import Layout from "../components/layout"

const Welcome = props => {
    console.log(props.location);
  const User = props.location.state.User;
  return (
    <Layout>
      <div>
        <h1>Welcome {User.username}!</h1>
        <h2>Email: {User.email}</h2>
      </div>
    </Layout>
  )
}

export default Welcome
