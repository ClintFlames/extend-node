/**
 * Load module.
 * @param {{
 * 	IGNORED_TYPES: string[],
 * 	IGNORED_FUNCTION: string[]
 * }} IGNORED Ignores specifies items.
 * - IGNORED_TYPES - Ignores specified types.
 * - IGNORED_FUNCTIONS - Ignores specified functions.
 */
module.exports = (IGNORED = { IGNORED_TYPES: [], IGNORED_FUNCTION: [] }) => {
	if ((typeof (IGNORED) != "object") || Array.isArray(IGNORED)) {
		throw new TypeError("\"IGNORED\" must be \"object\".");
	}
	const keys = Object.keys(IGNORED);
	if (!keys.includes("IGNORED_TYPES")) {
		IGNORED.IGNORED_TYPES = [];
	}
	if (!keys.includes("IGNORED_FUNCTION")) {
		IGNORED.IGNORED_FUNCTION = [];
	}
	if (!Array.isArray(IGNORED.IGNORED_TYPES)) {
		throw new TypeError("\"IGNORED.IGNORED_TYPES\" must be \"Array\".");
	}
	if (!Array.isArray(IGNORED.IGNORED_FUNCTION)) {
		throw new TypeError("\"IGNORED.IGNORED_FUNCTION\" must be \"Array\".");
	}
	if (IGNORED.IGNORED_TYPES.find((cell) => typeof (cell) != "string") != undefined) {
		throw new TypeError("Elements of \"IGNORED.IGNORED_TYPES\" must be \"string\".");
	}
	if (IGNORED.IGNORED_FUNCTION.find((cell) => typeof (cell) != "string") != undefined) {
		throw new TypeError("Elements of \"IGNORED.IGNORED_FUNCTION\" must be \"string\".");
	}
	const extensionData = require("./extension.json"),
		exported = {};
	for (const type in extensionData) {
		if (!IGNORED.IGNORED_TYPES.includes(type)) {
			exported[type] = {};
			for (const name of extensionData[type]) {
				if (!IGNORED.IGNORED_FUNCTION.includes(name)) {
					exported[type][name] = require(`./${type}/${name}.js`);
				}
			}
		}
	}
	return exported;
};