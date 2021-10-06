import { ClientFunction } from "testcafe";


export const getCurrentUrl = ClientFunction(() => window.location.href);

export const refreshPage = ClientFunction(() => location.reload());