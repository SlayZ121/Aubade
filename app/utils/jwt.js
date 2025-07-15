import { jwtVerify, SignJWT } from "jose";

const SECRET_KEY = process.env.JWT_SECRET;

const secretKey = new TextEncoder().encode(SECRET_KEY);

export async function generateToken(payload) {
  const jwt = await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("2d")
    .sign(secretKey);
  return jwt;
}

export async function verifyToken(token) {
  try {
    const { payload } = await jwtVerify(token, secretKey, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (error) {
    console.log("sarasij", error);
    throw new Error("Token verification failed", error);
  }
}
