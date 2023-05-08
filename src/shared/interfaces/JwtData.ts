import type Role from "shared/types/Role";

export default interface JwtData {
  iss: string;
  sub: string;
  role: Role;
  exp: number;
  iat: number;
}
