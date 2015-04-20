var args = arguments[0] || {};
console.log(args);
var pm = Alloy.Models.instance('products');
pm.set("id", args.productId);
pm.url = function() {
	return Alloy.Globals.apiUri + "products";
};
pm.parse = function(resp) {
	return resp.product;
};

pm.fetch({
	success : function(data) {
		$.desc.text = data.attributes.description;
		$.name.text = data.attributes.name;
		$.price.text = data.attributes.price;
		console.log(data.attributes.photos);

		(data.attributes.photos).forEach(function(photo, index, photos) {
			var imageView = Ti.UI.createImageView({
				image : encodeURI(Alloy.Globals.thumbsBase + "products/" + photo.name)
			});
			$.pHolder.add(imageView);
		});

		(data.attributes.tags).forEach(function(tag, index, tags) {
			var tagView = Ti.UI.createLabel({
				text : tag.name,
				class : 'tag'
			});	
			$.pHolder.add(tagView);	
		});

	},
	error : function(err) {
		console.log(err);
	}
});

