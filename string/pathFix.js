(path) => ((process.platform == "win32") ? path.replace(/\//g, "\\") : path.replace(/\\/g, "/"));
