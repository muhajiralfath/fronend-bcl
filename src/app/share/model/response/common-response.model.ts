import {PagingResponse} from "./paging-response.model";

export interface CommonResponse<T>{
  errors:any,
  data:T;
  paging:PagingResponse;
}
