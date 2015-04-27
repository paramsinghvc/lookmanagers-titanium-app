var args = arguments[0] || {};

Alloy.Globals.feedsTab = $.feedsTab;

var feeds = Alloy.Collections.instance('feeds');

feeds.url = function() {
	return Alloy.Globals.apiUri + "feeds?phouse=1";
};
console.log('feeds' );
console.log(feeds);
feeds.fetch({
	data : {
		page : 1
	},
	success : function(data) {
		console.log(data)
	},
	error : function(err) {
		console.log(err)
	}
});

var feedsRowClick = function(event) {
	var feedsId = feeds.at(event.index).attributes.id;

	// var cust = Alloy.createController('feeds/customer', {customerId : customerId}).getView();
	// $.customersTab.open(cust);

};
