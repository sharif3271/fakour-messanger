import * as bcrypt from 'bcrypt';

export async function hashPassword(pass: string) {
    return await bcrypt.hash(pass, 10)
}
export async function isSamePass(userEnteredPass: string, storedPass: string) {
    return await bcrypt.compare(userEnteredPass, storedPass)
}
export function isValidMobile(phoneNumber: string) {
    return /09[0-9]{9}/g.test(phoneNumber);
}