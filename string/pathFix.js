module.exports = (path, type) => (
	(type == "\\") ? path.replace(/\//g, "\\") :
		((type == "/") ? path.replace(/\\/g, "/") :
			(process.platform == "win32") ? path.replace(/\//g, "\\") : path.replace(/\\/g, "/")));