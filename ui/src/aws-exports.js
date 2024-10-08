// src/aws-exports.ts
export const awsConfig = {
    Auth: {
        Cognito:{
            region: 'us-east-1', // Replace with your Cognito region
            userPoolId: 'us-east-1_OXn7jTWse', // Replace with your User Pool ID
            userPoolClientId: '77ll5islrfcpemhkct3f0rmp2o', // Replace with your App Client ID
            mandatorySignIn: true,
            authenticationFlowType: 'USER_SRP_AUTH',
        }
    },
};

export const awsmobile = {
    "aws_project_region": "us-east-1",
    "aws_cognito_region": "us-east-1",
    "aws_user_pools_id": "us-east-1_OXn7jTWse",
    "aws_user_pools_web_client_id": "77ll5islrfcpemhkct3f0rmp2o",
    "aws_cognito_signup_attributes": ['EMAIL']
}

export default awsConfig
