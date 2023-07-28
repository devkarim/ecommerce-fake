export type SuccessResponse<T> = {
  success: true;
  data: T;
};

export type SuccessResponseNoData = {
  success: true;
};

export type ErrorResponse = {
  success: false;
  message: string;
};

export type BaseResponse<T> = ErrorResponse | SuccessResponse<T>;

export type BaseResponseNoData = ErrorResponse | SuccessResponseNoData;
