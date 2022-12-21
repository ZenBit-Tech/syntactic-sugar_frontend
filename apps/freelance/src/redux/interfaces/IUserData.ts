import { Role } from "./Role";
import { Token } from "./Token";

export interface IUserState {
	token: Token;
	role: Role | undefined;
}

export { Token };
