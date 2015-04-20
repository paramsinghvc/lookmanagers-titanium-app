exports.definition = {
	config: {
		// URL: Alloy.Globals.apiUri +"customers?phouse=1",
		adapter: {
			type: "restapi",
			collection_name: "customers",
			idAttribute: "id"
		}
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			initialize : function(args){

			}
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			initialize : function(args){
				console.log(args);
			},
			parse: function(resp){
				return resp.data;
			}
		});

		return Collection;
	}
};