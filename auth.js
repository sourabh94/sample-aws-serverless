
// Import required AWS SDK clients and command for Node.js
import {S3Client} from "@aws-sdk/client-s3";
import {fromCognitoIdentityPool} from "@aws-sdk/credential-providers";

const AmazonCognitoIdentity = require('amazon-cognito-identity-js');
const CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool;
const AWS = require('aws-sdk');
const request = require('request');
const jwkToPem = require('jwk-to-pem');
const jwt = require('jsonwebtoken');
global.fetch = require('node-fetch');


const poolData = {    
    UserPoolId : "us-east-1_wNF9zKadm", // Your user pool id here    
    ClientId : "76vm8i7d7fgu6noeunl7jkj2k9" // Your client id here
    }; 
const pool_region = 'us-east-1';

const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

const login = async () => {
    var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails({
        Username : 'patil.sourabh4991@gmail.com',
        Password : 'SamplePassword123',
    });

    var userData = {
        Username : 'patil.sourabh4991@gmail.com',
        Pool : userPool
    };
    var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
    cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function (result) {
            console.log('access token + ' + result.getAccessToken().getJwtToken());
            console.log('id token + ' + result.getIdToken().getJwtToken());
            console.log('refresh token + ' + result.getRefreshToken().getToken());
            return result;
        },
        onFailure: function(err) {
            console.log(err);
            return err;
        },

    });
}


module.exports = {
    login,
};