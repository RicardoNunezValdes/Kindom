//sequelize-auto -o "./autoModels" -d dte_dev -h 192.168.110.18 -u postgres -x postgres -e postgres -p 5432
var Sequelize = require('sequelize');
var config    = require('./configSystem');
//var sequelize    = new Sequelize('postgres://meca:meca@192.168.110.17:5432/servicios');
//var sequelize235 = new Sequelize('postgres://meca:meca@192.168.110.235:5432/servicios');
var dbConnected   = new Sequelize(
                                  config.DATABASE,
                                  config.DBUSER,
                                  config.DBPASSWORD,
                                  {
									host: 			config.DBHOST,
									dialect: 		config.DBMOTOR,
									isolationLevel: Sequelize.Transaction.ISOLATION_LEVELS.SERIALIZABLE,
                  logging: false
									/*define:{
                                            hooks:{
                                                    beforeBulkCreate : function(instances, options, fn){
                                                                                //console.log("CREANDO\n",instances,"\n-----------------------\n");
                                                                                fn(null)
                                                                              },
                                                    beforeBulkDestroy : function(instance, fn){                                                                                
                                                                                fn(null)
                                                                              },                          
                                                    beforeUpdate : function(instance, options, fn){
                                                                                
                                                                                fn(null)
                                                                              },
                                                    afterUpdate : function(instance, options, fn){
                                                                                console.log("AQUI ACTUALIZANDO",this,'--------------------');
                                                                                fn(null)
                                                                              },
                                                    beforeFind : function(instance, fn){
                                                                                console.log("Buscando",global)
                                                                                fn(null);
                                                                              },
                                                  }
                                    }*/
                                  }
                                );

exports.Sequelize   = Sequelize;
exports.dbConnected = dbConnected;