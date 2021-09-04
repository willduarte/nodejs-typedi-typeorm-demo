import { Service } from "typedi";
import { EntityRepository, Repository } from "typeorm";
import { UserProfile } from "../entities/UserProfile";

@Service()
@EntityRepository(UserProfile)
export class UserProfileRepository extends Repository<UserProfile> {
  /* some custom queries here */
}
