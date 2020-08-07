/*
 * Function to define actions for a specific card instance
 * @param oData - JSON data for the card instance
 * @return aInstanceActions - array of objects representing 
 *                            the actions to be defined
 */
function defineInstanceActions(oData) {

	// process OData and look for DecisionOptions
	var aInstanceActions = [];
	aInstanceActions.push({
		"name": "ACTION123",
		"label": "Create Leave Request",
		"serverName": "ACTION",
		"parameters": [{
			"label": "Comments",
			"name": "comments",
			"type": "Edm.String",
			"maxLength": 255,
			"nullable": true,
			"isKey": false
		}]
	});
	return aInstanceActions;
}