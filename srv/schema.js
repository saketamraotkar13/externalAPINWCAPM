const { executeHttpRequest } = require("@sap-cloud-sdk/http-client");

module.exports = async (srv) => {
    srv.on("getNWProducts", async (req) => {
        try{
            let response = await executeHttpRequest( 
                {
                    destinationName: "NorthWind",
                 },
                 {
                     method: "get",
                    url: "/Products",
                 }                
            );
            let data = response.data.d.results;
            return data;
        } catch (error){
            console.log(error);
        }
    });
}