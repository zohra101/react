import { logins } from "./logins";
// RETURNS TRUE IF EMAIL AND PASSWORD MATCH A LOGIN
// RETURNS FALSE IF EMAIL AND PASSWORD DON'T MATCH A LOGIN
export function authenticationSimulationDB(email = "", password = "") {
for (const login of logins) {
const currentEmail = login. email;
const currentPassword = login.password;
if (email === currentEmail && password === currentPassword) return true;
return false;