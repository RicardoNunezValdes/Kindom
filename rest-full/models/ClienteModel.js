module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cliente', 
    {
      nombre:           { type : DataTypes.STRING(100), allowNull:false  },
      email:            { type : DataTypes.STRING(200), allowNull:false  },
      telefono:         { type : DataTypes.STRING(50),  allowNull:false  },
      comuna:           { type : DataTypes.STRING(200), allowNull:false  },
      fecha_nacimiento: { type : DataTypes.DATE,        allowNull:false  },
      observacion:      { type : DataTypes.TEXT,        allowNull:true   },
    },
    {
      deletedAt:        'destroyTime',
      paranoid:          true,
      freezeTableName:   true,
      tableName:         'cliente',
    }
  );
};