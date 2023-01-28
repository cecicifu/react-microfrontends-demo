/** @typedef {{name: string, url: string}[]} RemotesArray */
/** @type {RemotesArray} */
export const REMOTES = [
	{ name: "shell1", url: process.env.REACT_APP_SHELL1_HOST ?? "" },
	{ name: "shell2", url: process.env.REACT_APP_SHELL2_HOST ?? "" },
]
