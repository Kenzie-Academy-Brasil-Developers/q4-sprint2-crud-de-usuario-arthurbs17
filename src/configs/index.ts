import dotenv from "dotenv";

dotenv.config();

type DotEnvConfig = {
  secretKey: string;
  expiresIn: string;
};

const config: DotEnvConfig = {
  secretKey: process.env.SECRET_KEY,
  expiresIn: process.env.EXPIRES_IN ?? "1h",
};

const PORT = process.env.PORT ?? 3000;

export { config, PORT };
