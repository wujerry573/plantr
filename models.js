const Sequelize = require('sequelize');

const db = new Sequelize('postgres://localhost:5432/plantr');

const GARDENER = db.define('GARDENER', {
	name: {
		type: Sequelize.STRING
	},
	age: {
		type: Sequelize.INTEGER
	}
});

const PLOT = db.define('PLOT', {
	size: {
		type: Sequelize.INTEGER
	},
	shaded: {
		type: Sequelize.BOOLEAN
	}
});

const VEGETABLE = db.define('VEGETABLE', {
	name: {
		type: Sequelize.STRING
	},
	color: {
		type: Sequelize.STRING
	},
	plant_on: {
		type: Sequelize.DATE
	}
});

PLOT.belongsTo(GARDENER);
GARDENER.hasOne(PLOT);

VEGETABLE.belongsToMany(PLOT, { through: 'VegatablePlots' });
PLOT.belongsToMany(VEGETABLE, { through: 'VegatablePlots' });

GARDENER.belongsTo(VEGETABLE, { as: 'favoriteVegetable' });




module.exports = {db, VEGETABLE, PLOT, GARDENER};
