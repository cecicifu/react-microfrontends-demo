import React from "react"
import { REMOTES } from "../../constants"
import ErrorBoundary from "../ErrorBoundary"
import { findRemoteUrl, loadComponent } from "./remote"

const RemoteComponent = ({
	remote,
	component,
	scope = "default",
	fallback = null,
	...props
}) => {
	const remoteUrl = findRemoteUrl(remote, REMOTES)
	const Component = React.lazy(
		loadComponent(remote, remoteUrl, `./${component}`, scope)
	)
	return (
		<ErrorBoundary>
			<React.Suspense fallback={fallback}>
				<Component {...props} />
			</React.Suspense>
		</ErrorBoundary>
	)
}

export default RemoteComponent
