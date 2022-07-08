
// Import required AWS SDK clients and command for Node.js
// import {S3Client} from "@aws-sdk/client-s3";
// import {fromCognitoIdentityPool} from "@aws-sdk/credential-providers";

const {
    CognitoIdentityProviderClient,
    AdminInitiateAuthCommand,
    AddCustomAttributesCommand,
} = require("@aws-sdk/client-cognito-identity-provider");

input={
    UserPoolId:"us-east-1_wNF9zKadm"
};


const cognito = new CognitoIdentityProviderClient({ region: "us-east-1" });

const login = async () => {
    const email = "19m529@gmail.com";
    const password = "Sourabh1994@aws";
    const user_pool_id = "us-east-1_YEay3R05U";
    const client_id = "ondjmo7s8mq8rrknf9c26a3t3";
    
      
      const params = {
        AuthFlow: "ADMIN_NO_SRP_AUTH",
        UserPoolId: user_pool_id,
        ClientId: client_id,
        AuthParameters: {
          USERNAME: email,
          PASSWORD: password
        }
      }
      const cmd = new AdminInitiateAuthCommand(params);
      const response = await cognito.send(cmd);
      return response;
}


module.exports = {
    login,
};