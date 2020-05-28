const express = require("express")
const path = require("path")
const fs = require("fs")
const cheerio = require("cheerio")


module.exports = (app, staticPath, log) => {
	log.debug(`Serving static files from ${staticPath}`)
	app.use(express.static(staticPath, {
		maxAge: 1000*60*60*24*30 // Set max age for static files served from disk
	}))

	// This handler serves the default index.html file for all non-handled routes so that the client can handle them instead.
	app.use("/*", (req, res) => {
		const html = fs.readFileSync(path.resolve(staticPath, "./index.html"))
		const $ = cheerio.load(html)
		const initState = JSON.stringify({
			user: {
				authenticated: !!req.user
			}
		})
		const script = `<script id="initialState" type="text/plain">${initState}</script>`
		$("head").append(script)
		res.send($.html())
	})
}