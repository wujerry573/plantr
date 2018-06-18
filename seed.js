const db = require('./models');

db.sync({ force: true })
	.then(() => {
		console.log('synced');
		db.close();
	})
	.catch(err => {
		console.log('u suk');
		console.error(err);
		db.close();
	});
