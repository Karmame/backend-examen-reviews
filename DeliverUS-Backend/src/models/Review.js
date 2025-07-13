import { Model } from 'sequelize'

const loadModel = (sequelize, DataTypes) => {
  class Review extends Model {
    static associate (models) {
      Review.belongsTo(models.Restaurant, { foreignKey: 'restaurantId', as: 'restaurant' })
      Review.belongsTo(models.User, { foreignKey: 'customerId', as: 'user' })
    }
  }

  Review.init({
    stars: DataTypes.INTEGER,
    body: DataTypes.STRING,
    restaurantId: DataTypes.INTEGER,
    customerId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Review'
  })

  return Review
}

export default loadModel
