
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('m_categoria_producto', 
    {
      descripcion:      { type : DataTypes.STRING(100),   allowNull:false  }
    },
    {
      deletedAt:        'destroyTime',
      paranoid:          true,
      freezeTableName:   true,
      tableName:         'm_categoria_producto',
    }
  );
};