import { type Request, type Response } from "express";
import { getModelsService } from "../../services/models/models.services";
import { successResponse } from "../../utils/responseMethods";

export const ListAllModels = async (req: Request, res: Response) => {
  const data = await getModelsService();
  successResponse({ res, message: "Successfully scapped ollama models", data });
};
