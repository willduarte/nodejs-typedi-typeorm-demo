import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("user_profiles")
export class UserProfile extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  id: string;

  @Column()
  name: string;

  constructor(props?: Partial<UserProfile>) {
    super();
    if (props) {
      Object.assign(this, props);
    }
  }
}
