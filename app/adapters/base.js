import DS from 'ember-data';

export default DS.RESTAdapter.extend({
	host: "http://localhost",
	namespace: "missions/backend/public/api",
});