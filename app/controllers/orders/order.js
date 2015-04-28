var args = arguments[0] || {};
var cm = Alloy.Models.instance('orders');
cm.set('id', args.orderId);
cm.url = function() {
	return Alloy.Globals.apiUri + "orders";
};
cm.parse = function(resp) {
	return resp.order;
};

cm.fetch({
	success : function(data) {
		$.name.text = data.attributes.name;
		$.price.text = data.attributes.price;
		$.description.text = data.attributes.description;
		$.current_state.text = data.attributes.current_state;

		var imageView = Ti.UI.createImageView({
			image : encodeURI(Alloy.Globals.thumbsBase + "products/" + data.attributes.photo)
		});
		$.cHolder.add(imageView);

	},
	error : function(err) {
		console.log(err);
	}
});
