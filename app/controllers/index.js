// //
// // SETUP THE MENU VIEW
// //
// var menu = Alloy.createController('menu').getView();
// menu.addEventListener('click', function(e) {
//
// if(e.rowData.rowId == 0 ){
// var productsView = Alloy.createController('products', {dm : $.drawermenu});
//
// $.drawermenu.drawermainview.add(productsView.getView());
// }
//
// if(e.rowData.rowId == 2 ){
// var customersView = Alloy.createController('customers', {dm : $.drawermenu});
//
// $.drawermenu.drawermainview.add(customersView.getView());
// }
// $.drawermenu.showhidemenu();
// });
// //
//
// //
// // SETUP THE MAIN VIEW
// //
// var main = Ti.UI.createView({
// backgroundColor : "#cacaca"
// });
// var mainLabel = Ti.UI.createLabel({
// text : "LookManagers"
// });
// main.add(mainLabel);
// //
//
// // SET LISTENER TO OPEN/CLOSE THE MENU
// main.addEventListener('click', function(e) {
// $.drawermenu.showhidemenu();
// });
// //
//
// // Initialize the widget
// $.drawermenu.init({
// menuview : menu,
// mainview : main,
// duration : 200,
// parent : $.index
// });

// $.drawermenu.addEventListener('open', function menuOpen () {
// Ti.API.info("Menu opened");
// });
//
// $.drawermenu.addEventListener('close', function menuOpen () {
// Ti.API.info("Menu closed");
// });

// you have access to:
// $.drawermenu.init
// $.drawermenu.duration 			(read/write)
// $.drawermenu.showhidemenu();		(method)
// $.drawermenu.menuopen 						(readonly)
//

$.tabGroup.open();
function addCustomer() {
	var cust = Alloy.createModel('customers');
	var data = {
		name : 'Denis',
		gender : 'male',
		customer_type_id : '1',
		production_house_id : '1',
		email : 'paramsinghvc@gmail.com',
		phone : '8750243793'
	};
	cust.url = function() {
		return Alloy.Globals.apiUri + "customers";
	};
	cust.save(data, {
		success : function(res) {
			// console.log(res);
		},
		error : function(err) {
			// console.log(err);
		}
	});
}
function doOpen() {
	if (OS_ANDROID) {
		var activity = $.getView().activity;
		var menuItem = null;
		activity.onCreateOptionsMenu = function(e) {
			if ($.tabGroup.activeTab.title === "Customers") {
			menuItem = e.menu.add({
				//itemId : "PHOTO",
				title : "Add Customer",
				showAsAction : Ti.Android.SHOW_AS_ACTION_ALWAYS,
				icon : Ti.Android.R.drawable.ic_menu_add
			});

			menuItem.addEventListener("click", function(e) {
				addCustomer();
			});
			}
		};
		activity.invalidateOptionsMenu();
		// this forces the menu to update when the tab changes
		$.tabGroup.addEventListener('blur', function(_event) {
			$.getView().activity.invalidateOptionsMenu();
		});
	}
}
