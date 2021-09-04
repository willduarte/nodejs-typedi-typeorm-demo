import { Service } from "typedi";
import { InjectRepository } from "typeorm-typedi-extensions";
import { UserProfileRepository } from "../repositories/UserProfileRepository";
import { UserProfile } from "../entities/UserProfile";

type UserProfileDTO = {
  name: string;
};

@Service()
export class UserProfileService {
  constructor(@InjectRepository() private repository: UserProfileRepository) {}

  async create({ name }: UserProfileDTO): Promise<UserProfile> {
    return this.repository.save(new UserProfile({ name }));
  }

  async findOne(): Promise<UserProfile | undefined> {
    return this.repository.findOne(1);
  }
}
