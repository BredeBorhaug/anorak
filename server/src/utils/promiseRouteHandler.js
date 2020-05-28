
/**
 * A very simple wrapper that allows us to use async handlers in routes
 * This helper only handles errors gracefully
 * @param {*} action 
 */
module.exports = (action) => (req, res, next) => {
	const result = action(req, res, next)
	if (result.then) {
		result.catch(err => {
			next(err)
		})
	}
}