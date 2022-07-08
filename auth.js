
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
    const user_pool_id = "us-east-1_wNF9zKadm";
    const client_id = "76vm8i7d7fgu6noeunl7jkj2k9";
    
      
      const params = {
        AuthFlow: "ADMIN_NO_SRP_AUTH",
        UserPoolId: user_pool_id,
        ClientId: client_id,
        AuthParameters: {
          USERNAME: email,
          PASSWORD: password,
          SECRET_HASH:"jll65m3c79qur8m4asjfrv6cfpib9gfut6rll874hjo8kg48ng"
        }
      }
      const cmd = new AdminInitiateAuthCommand(params);
      const response = await cognito.send(cmd);
      return sendResponse(200, {
        message: 'Success',
        token: response.AuthenticationResult.IdToken
      })
}


module.exports = {
    login,
};