var args = arguments[0] || {};

Alloy.Globals.feedsTab = $.feedsTab;

var feeds = Alloy.Collections.instance('activities');

feeds.url = function() {
	return Alloy.Globals.apiUri + "feeds?phouse=1";
};


function fetchData(e) {

	feeds.fetch({
		data : {
			page : 1
		},
		success : function() {
			if (e)
				e.hide();
		},
		error : function() {
			if (e)
				e.hide();
		}
	});
}

if (OS_ANDROID)
	$.ptr.refresh();

if (OS_IOS || OS_MOBILEWEB) {
	fetchData();
}


// var feedsRowClick = function(event) {
	// var feedsId = feeds.at(event.index).attributes.id;
// 
	// // var cust = Alloy.createController('feeds/customer', {customerId : customerId}).getView();
	// // $.customersTab.open(cust);
// 
// };
