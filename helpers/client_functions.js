import { ClientFunction } from "testcafe";


export const getCurrentUrl = ClientFunction(() => window.location.href);

export const refreshPage = ClientFunction(() => location.reload());

export const getCookies = ClientFunction(() => document.cookie);

export const setCookie = ClientFunction((name, value) => document.cookie = `${name}=${value}`);