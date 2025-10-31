import { Response } from "express";

export type successResProps = {
  res: Response;
  message: string;
  data?: object | null;
  statusCode?: number;
};

export type errorResProps = {
  res: Response;
  message: string;
  data?: object | null;
  statusCode?: number;
};
