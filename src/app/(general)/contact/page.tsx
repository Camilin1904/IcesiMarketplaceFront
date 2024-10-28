import { Metadata } from "next"

export const metadata: Metadata ={
    title: "ICESI Contact",
    description: "ICESI University"
}

export default function ContactPage(){
    return  (
        <div className="flex min h-screen flex-col item-center p-24">
          <h1 className="flex items-center">Contact Page</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero praesentium, fugiat ratione in non maxime blanditiis quae officia quaerat facere! Magni non accusantium ut eveniet vitae enim animi explicabo minima!</p>
        </div>
      )
}