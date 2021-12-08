import HttpStatusCode from '../types/http-error-codes';

export interface Policy {
  retry: number;
  retryDelay: number;
  retryOnErrorCodes: HttpStatusCode[];
}
