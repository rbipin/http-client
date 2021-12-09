import HttpStatusCode from '../types/http-status-codes';
/**
 * This interface is HttpResponse<T>
 */
export interface HttpResponse<T> {
  /** Http Status code */
  status: HttpStatusCode;
  /** Response data */
  data: T | null;
}
