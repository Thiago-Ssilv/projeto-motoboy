const mongoose = require ("mongoose")

async function main() {
    try {
        mongoose.set("strictQuery",true);
      await mongoose.connect(
        "mongodb+srv://thiagossilva527:thiaguinho10@cluster0.4ix3q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
      );
      
      console.log("conectado ao banco!!")
    } catch (error) {
      console.log(`erro:${error}`) ;
    }
}


module.exports = main;