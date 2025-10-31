import axios from "axios";
import * as cheerio from "cheerio";
import { singleModelInfo } from "../../@types/models.types";

const ollamaLibURL = "https://ollama.com/library";

export const getModelsService = async (): Promise<singleModelInfo[]> => {
  const { data } = await axios.get(ollamaLibURL);
  const $ = cheerio.load(data);
  const models: singleModelInfo[] = [];
  // scrapping models from ollama libary
  $("li[x-test-model]").each((_, element) => {
    const modelInfo: singleModelInfo = {
      name: "",
      description: "",
      models: [],
      tags: [],
      pulls: "",
      updatedAt: "",
      isCloudModelAvailable: false,
    };

    // Name
    modelInfo.name = $(element)
      .find("[x-test-model-title] span")
      .first()
      .text()
      .trim();

    // Description
    modelInfo.description = $(element)
      .find("[x-test-model-title] p.max-w-lg")
      .first()
      .text()
      .trim();

    // Model sizes
    modelInfo.models = $(element)
      .find("[x-test-size]")
      .map((_, el) => $(el).text().trim())
      .get();

    // Tags
    modelInfo.tags = $(element)
      .find("[x-test-capability]")
      .map((_, el) => $(el).text().trim())
      .get();

    // Pulls
    modelInfo.pulls = $(element).find("[x-test-pull-count]").text().trim();

    // UpdatedAt
    modelInfo.updatedAt = $(element).find("[x-test-updated]").text().trim();

    // isCloudModelAvailable
    modelInfo.isCloudModelAvailable =
      modelInfo.tags.includes("cloud") ||
      modelInfo.models.some((m) => m.includes("cloud"));

    models.push(modelInfo);
  });
  return models;
};
