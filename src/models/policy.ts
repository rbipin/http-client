import HttpStatusCode from '../types/http-status-codes';

export interface Policy {
  retry: number;
  retryDelay: number;
  retryOnErrorCodes: HttpStatusCode[];
}
