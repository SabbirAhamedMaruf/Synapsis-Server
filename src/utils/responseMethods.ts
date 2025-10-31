import { errorResProps, successResProps } from "../@types/response.types";

export const successResponse = ({
  res,
  message = "",
  data = null,
  statusCode = 200,
}: successResProps) => {
  res.status(statusCode).json({
    status: "success",
    message,
    data,
  });
};

export const errorResponse = ({
  res,
  message = "",
  data = null,
  statusCode = 500,
}: errorResProps) => {
  res.status(statusCode).json({
    status: "failed",
    message,
    data,
  });
};
