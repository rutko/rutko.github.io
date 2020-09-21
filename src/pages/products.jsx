import React from "react"
import {Link} from "gatsby"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <product>
        <h3><Link to="https://www.lolvc.org/">LoLVC</Link></h3><h5>- League of Legendsのフレンド募集掲示板 -</h5>
        <p>Rails / JavaScript</p>
      </product>
    </Layout>
  );
}
