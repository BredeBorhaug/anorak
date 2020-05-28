/* eslint-disable no-console */




const path = require("path")
const fs = require("fs-extra")

const root = path.resolve(__dirname)
const serverRoot = path.resolve(root, "./server")
const serverRoot = path.resolve(root)
const rootDestination = path.resolve(root, "./dist/server")

const jobs = [
	{ source: path.resolve(serverRoot, "./src"), dest: rootDestination },
	{ source: path.resolve(serverRoot, "./package.json"), dest: path.resolve(rootDestination, "./package.json") },
	{ source: path.resolve(serverRoot, "./package-lock.json"), dest: path.resolve(rootDestination, "./package-lock.json") }
]

const start = async () => {
	for (const job of jobs) {
		console.log(`Copying ${job.source} -> ${job.dest}`)
		await fs.copy(job.source, job.dest)
	}
}

start().catch(error => {
	console.error(error.message, error.stack)
	process.exit(1)
})