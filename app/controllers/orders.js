var args = arguments[0] || {};

Alloy.Globals.ordersTab = $.ordersTab;

var orders = Alloy.Collections.instance('orders');
orders.url = function() {
	return Alloy.Globals.apiUri + "orders?phouse=1";
};
orders.fetch({
	data : {
		page : 1
	}
});

function modelTransform(model) {

	var t = model.toJSON();
	t.imageUri = encodeURI(Alloy.Globals.thumbsBase + "products/" + t.photo);
	t.customer = t.customer.name;
	return t;

}