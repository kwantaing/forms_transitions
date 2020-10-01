import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import UserForm from "../components/UserForm"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <UserForm></UserForm>
  </Layout>
)

export default IndexPage
