export default class OAuthToken {
  token: string;

  tokenExpiryTime: Date | null = null;

  constructor(token: string, tokenExpiryMilliSeconds: number) {
    this.token = token;
    const currentDate = new Date();
    this.tokenExpiryTime = new Date(
      currentDate.setSeconds(tokenExpiryMilliSeconds),
    );
  }

  public isValid() {
    const currentDate = new Date();
    const checkingTime = new Date(currentDate.setMinutes(1));
    if (this.tokenExpiryTime == null) {
      return false;
    }
    return checkingTime < this.tokenExpiryTime;
  }
}
