const getTimeStamp = new Date().toUTCString();

// var getTimeStamp = new Date().toUTCString();

const info = (namespace, message, Object) => {
	if (Object) {
		console.log(`[${getTimeStamp}][info][${namespace}] ${message}`, Object);
	} else {
		console.log(`[${getTimeStamp}][info][${namespace}] ${message}`);
	}
};

const warn = (namespace, message, Object) => {
	if (Object) {
		console.log(`[${getTimeStamp}][WARN][${namespace}] ${message}`, Object);
	} else {
		console.log(`[${getTimeStamp}][WARN][${namespace}] ${message}`);
	}
};

const error = (namespace, message, Object) => {
	if (Object) {
		console.log(`[${getTimeStamp}][ERROR][${namespace}] ${message}`, Object);
	} else {
		console.log(`[${getTimeStamp}][ERROR][${namespace}] ${message}`);
	}
};

const debug = (namespace, message, Object) => {
	if (Object) {
		console.log(`[${getTimeStamp}][DEBUG][${namespace}] ${message}`, Object);
	} else {
		console.log(`[${getTimeStamp}][DEBUG][${namespace}] ${message}`);
	}
};

export default {
	info,
	warn,
	error,
	debug,
};
