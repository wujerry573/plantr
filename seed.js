const { db } = require('./models');
const { VEGETABLE, PLOT, GARDENER } = require('./models');

const vegPlot = db.model('VegetablePlots');

VEGETABLE.create({
	name: 'eggplant',
	color: 'purple',
	plant_on: Date.now()
})
	.then(veg => {
		return GARDENER.create({
			name: 'jacoby',
			age: '20',
			favoriteVegetableId: veg.id
		});
	})
	.then(plotveg => {
		return PLOT.create({
			size: '1',
			shaded: 'true',
			GARDENERId: plotveg.id
		});
  }).then(veg() => {
    return vegPlot.create({
      VEGETABLEId: veg.id,
      PLOTId:
    })
  }
  )
	.catch(err => {
		console.error(err);
	});


// PLOT.create({
// 	size: '1',
// 	shaded: 'true'
// })
// 	.then(plot => {
// 		return plot;
// 	})
// 	.catch(err => {
// 		console.error(err);
// 	});

// GARDENER.create({
// 	name: 'jacoby',
// 	age: '20'
// })
//   .then(human => {
//     return human;
// 		// return PLOT.create({ humanName: human.name });
// 	})
// 	.catch(err => {
// 		console.error(err);
// 	});

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
