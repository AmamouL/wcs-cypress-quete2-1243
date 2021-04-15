export const registerDom = 
{
    login: 
    {
        passInput : "[data-test=password-wrapper] > [data-test=password-input] > [data-test=input-field-input-wrapper] > [data-test=input-field-input]",
        emailInput : "[data-test=form] > [data-test=input-email] > .input-inner > [data-test=input]",
        invalidEmailPrompt : "[data-test=list-item]",
        invalidCredentialsPrompt : "[data-test=login-credential-error]",
        submitBtn : "[data-test=submit-button-login]",
    },
    signup:
    {
        emailInput : "#email-signup",
        fnInput : "#firstName-signup",
        lnInput : "#lastName-signup",
        invalidNamePrompt : "",
        passInput:"#password-signup",
        invalidPassPrompt :"",
        submitBtn: "[data-test=signup-submit-button]"
    }
}