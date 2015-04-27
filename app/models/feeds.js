exports.definition = {
	config: {
		
		adapter: {
			type: "restapi",
			collection_name: "feeds",
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
				return resp;
			}
		});

		return Collection;
	}
};