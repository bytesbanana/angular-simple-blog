export class AuthenticationResponse {
  constructor(
    public username: string,
    public token: string,
    public refreshToken: string,
    public expiry: Date
  ) {}
}
