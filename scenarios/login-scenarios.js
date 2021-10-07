import { invalidLoginErrorText, lockedOutUserErrorText } from '../constants/common';

export const loginScenarios = [
    {
        name: 'invalid password',
        userName: process.env.STANDARD_USER,
        password: ` ${process.env.USER_PASSWORD}`,
        expectedError: invalidLoginErrorText
    },
    {
        name: 'invalid user',
        userName: `${process.env.STANDARD_USER}1`,
        password: process.env.USER_PASSWORD,
        expectedError: invalidLoginErrorText
    },
    {
        name: 'locked out user',
        userName: process.env.LOCKED_OUT_USER,
        password: process.env.USER_PASSWORD,
        expectedError: lockedOutUserErrorText
    }
];