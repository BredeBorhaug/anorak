const { promisify } = require("util")
const fs = require("fs")
const path = require("path")

module.exports = async () => {
	const envName = process.env.APPSETTING_APP_ENV || process.env.APP_ENV || "dev"
	const file = path.resolve(__dirname, `./${envName}.config.js`)
	if (!await promisify(fs.exists)(file)) {
		throw new Error(`Configuration file not found @ "${file}"`)
	}

	return require(file)
}