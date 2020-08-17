import React from "react"
import Image from "../components/image"
import Layout from "../components/layout"

export default function Home() {
  return (
    <>
    <Layout>
      <pictures>
        <Image filename = "osushi1.jpg" alt="osushi"/>
        <Image filename = "osushi2.jpg" alt="osushi"/>
      </pictures>
      <pictures>
        <Image filename = "osushi3.jpg" alt="osushi"/>
        <Image filename = "osushi4.jpg" alt="osushi"/>
      </pictures>
    </Layout>
    </>
  );
}
