export class JwtResponse {

  success: boolean;
  message: string;
  data: {
    id: string;
    accessToken: string;
    type: string;
    username: string;
    roles: string[];
  };
}
