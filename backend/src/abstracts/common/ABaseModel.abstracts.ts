import { IBaseModel } from "src/interfaces/common/IBaseModel.interface";
import { Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn, VersionColumn } from "typeorm";


export abstract class ABaseModel implements IBaseModel {
    @Column('uuid')
    @PrimaryGeneratedColumn('uuid') // Khóa chính
    id: string;

    @VersionColumn({ default: 1 })
    version: number;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

}
