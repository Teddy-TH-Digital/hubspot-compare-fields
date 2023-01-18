const hubspot = require('@hubspot/api-client');

exports.main = async (event, callback) => {

const Field1toCompare = event.inputFields['field1'];
  const Field2toCompare = event.inputFields['field2'];
  var Resultfield = "";
  if(field1 == field2)
    {
      Resultfield = "Identical";
    }else{
      Resultfield = "Different";
    }

  const hubspotClient = new hubspot.Client({ accessToken: process.env.privateAppToken });


try {
    const ApiResponse = await hubspotClient.crm.contacts.basicApi.update(event.object.objectId, {properties: {
            Resultfield:Resultfield,
          }});
     console.log(ApiResponse);
    
  } catch (err) {
    console.error("error");
  
    throw err;
  }

}
