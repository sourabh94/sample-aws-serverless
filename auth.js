
// Import required AWS SDK clients and command for Node.js
// import {S3Client} from "@aws-sdk/client-s3";
// import {fromCognitoIdentityPool} from "@aws-sdk/credential-providers";

const {
    CognitoIdentityProviderClient,
    AddCustomAttributesCommand,
} = require("@aws-sdk/client-cognito-identity-provider");

input={
    UserPoolId:"us-east-1_wNF9zKadm"
};
config={

}

const client = new CognitoIdentityProviderClient({ region: "us-east-1" });

const login = async () => {

    const command = new ListUsersCommand(input);
    const response = await client.send(command);
    return response;    
}


module.exports = {
    login,
};