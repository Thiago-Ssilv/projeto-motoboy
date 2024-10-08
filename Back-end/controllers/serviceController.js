const {Service: ServiceModel} = require("../models/Service");

const serviceController = {

    create: async(req, res) =>{
        try {
          const service ={
            chinabox: req.body.chinabox,
            moto99: req.body.moto99,
            ifood: req.body.ifood,
            lalamove: req.body.lalamove,
            data: req.body.data,
            gastos: req.body.gastos,
            lucro: req.body.lucro,
          };

          const response = await ServiceModel.create(service);

          res.status(201).json({response, msg:"serviços criado com sucesso !!"});

        } catch (error) {
            console.log(error)
        }
    },

getAll: async(req, res) => {
  try {
    
      const services = await ServiceModel.find();

      res.json(services);


  } catch (error) {
      console.log(error)
  }
},
get: async(req, res) => {
  try {
      // id => req url ===  GET
      const id = req.params.id
      const service = await ServiceModel.findById(id);

      if(!service){
        res.status(404).json({msg: "serviço não encontrado."});
        return;
      }

      res.json(service);

  } catch (error) {
     console.log(error);
  }
},

delete: async(req, res) =>{
  try {

      const id = req.params.id;

      const service = await ServiceModel.findById(id);

      if(!service){
        res.status(404).json({msg: "serviço não encontrado."});
        return;
      }
    
      const deletedService = await ServiceModel.findByIdAndDelete(id);

      res.status(200).json({deletedService, msg:"serviço excluído com sucesso"});

  } catch (error) {
    console.log(error);
  }
},
update: async (req, res) => {
   const id = req.params.id;

   const service ={
       chinabox: req.body.chinabox,
       moto99: req.body.moto99,
       ifood: req.body.ifood,
       lalamove: req.body.lalamove,
       data: req.body.data,
   };
  
   const updatedService = await ServiceModel.findByIdAndUpdate(id, service);

   if(!updatedService){
    res.status(404).json({msg: "serviço não encontrado."});
    return;
  }

  res.status(200).json({service, msg: "serviço atualizado com sucesso."});
},

};

module.exports = serviceController;