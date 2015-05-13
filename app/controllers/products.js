var args = arguments[0] || {};
// Alloy.Globals.productsNav = $.productsNav;
// var nav = require('nav');
Alloy.Globals.productsTab = $.productsTab;
var products = Alloy.Collections.instance('products');
products.url = function() {
	return Alloy.Globals.apiUri + "products?phouse=1";
};

function fetchData(e) {

	products.fetch({
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

function modelTransform(model) {

	var t = model.toJSON();
	t.imageUri = encodeURI(Alloy.Globals.thumbsBase + "products/" + t.photo);

	return t;

}

function productRowClick(event) {
	var productAttrs = products.at(event.index).attributes;

	var a = {
		productId : productAttrs.id,
	};

	var detailView = Alloy.createController('products/product', a).getView();
	$.productsTab.open(detailView);
// nav.openWin(Alloy.Globals.productsNav, 'products/product', a);
	
}




