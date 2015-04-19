var args = arguments[0] || {};

var rows=[];
var items = ['Products', 'Orders', 'Customers', 'Team Members', 'Tags', 'Activity Feed', 'Dashboard', 'Settings'];
for (i=0;i<items.length;i++){
	var row=Ti.UI.createTableViewRow({
		height: 30,
		rowId: i
	});
	row.add(Ti.UI.createLabel({
		text: items[i],
		width: Ti.UI.FILL
	}));
	rows.push(row);
}

$.menu.data=rows;