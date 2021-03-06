exports.definition = {
	config: {
	
		adapter: {
			type: "restapi",
			collection_name: "orders",
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
			
			parse: function(resp){
				return resp.data;
			}
		});

		return Collection;
	}
};