import HttpStatusCode from '../types/http-error-codes';
/**
 * This interface is HttpResponse<T>
 */
export interface HttpResponse<T> {
  /** Http Status code */
  status: HttpStatusCode;
  /** Response data */
  data: T | null;
}
