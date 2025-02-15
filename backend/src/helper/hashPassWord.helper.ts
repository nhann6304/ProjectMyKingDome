import *  as bcrypt from "bcryptjs"
import { CONST_VAL } from "src/constants/value.contants";

export class PasswordHelper {
    static async hashPassword(pass_hien_tai: string) {
        const passwordHash = await bcrypt.hash(pass_hien_tai, CONST_VAL.SALT);
        return passwordHash
    }

    static async comparePassword(pass_ma_hoa: string, pass_hien_tai): Promise<boolean> {
        const isMatch = await bcrypt.compare(pass_hien_tai, pass_ma_hoa);
        return isMatch
    }
}