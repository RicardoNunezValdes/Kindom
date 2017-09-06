module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tipo_cuenta_banco', 
    {
      descripcion: { type : DataTypes.STRING(50), allowNull:false },
    },
    {
      deletedAt:        'destroyTime',
      paranoid:          true,
      freezeTableName:   true,
      tableName:         'tipo_cuenta_banco',
    }
  );
};