// Use strict
"use strict";

// Try
try {

	// Export SMAZ React Native module
	module["exports"] = require("@mwcproject/smaz-react");
}

// Catch errors
catch(error) {

	// Try
	try {
	
		// Export SMAZ Node.js addon
		module["exports"] = require("@mwcproject/smaz-native");
	}
	
	// Catch errors
	catch(error) {
	
		// Export SMAZ WASM wrapper
		module["exports"] = require("@mwcproject/smaz-wasm");
	}
}
