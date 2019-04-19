import React from "react"
import {render} from "react-dom"
import data from "../data/recipes" 
import Menu from "./components/Menu"

// const mytest = React.createElement("h1", null, "hello React")


window.React = React
console.log(data)
render(
	<Menu recipes={data}/>, 
	document.getElementById("react-container"))