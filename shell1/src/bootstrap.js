import React from "react"
import ReactDOM from "react-dom/client"
import Page from "./Pages/HomePage"
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
	<React.StrictMode>
		<Page />
	</React.StrictMode>
)
