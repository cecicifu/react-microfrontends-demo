import React from "react"
import RemoteComponent from "./components/RemoteComponent"
import "./App.css"

function App() {
	return (
		<div className="App">
			<h1>Host</h1>

			<div>
				<div>
					<RemoteComponent
						remote="shell1"
						component="App"
						fallback="Loading shell1.."
					/>
				</div>
				<div>
					<RemoteComponent
						remote="shell2"
						component="App"
						fallback="Loading shell2.."
					/>
				</div>
			</div>
		</div>
	)
}

export default App
