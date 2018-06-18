const {db} = require('./models');
const {VEGETABLE, PLOT, GARDENER} = require('./models');

VEGETABLE.create({
	name: 'eggplant',
	color: 'purple',
	plant_on: Date.now()
}).then((veg) => {
	console.log("this is a: " ,veg);
}).catch(err => {
	console.error(err);
});


db.sync()
	.then(() => {
		console.log('synced');
		db.close();
	})
	.catch(err => {
		console.log('u suk');
		console.error(err);
		db.close();
	});
