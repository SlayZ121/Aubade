import bcrypt from "bcryptjs";
import Users from "@/app/database/models/user.model";
import { connect } from "@/app/database/mongodb/mongoose";
// 👈 this ensures DB is connected before any query

export async function createUser({ email, password, name = "" }) {
  await connect(); // ensure DB is connected

  const existingUser = await Users.findOne({ email });
  if (existingUser) throw new Error("Email is already in use");

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await Users.create({
    email,
    password: hashedPassword,
    name,
  });

  const { password: _, ...userWithoutPassword } = newUser.toObject();
  return userWithoutPassword;
}

export async function findUserByEmail(email) {
  await connect(); // ensure DB is connected
  return await Users.findOne({ email });
}

export async function loginUser({ email, password }) {
  await connect(); 

  const user = await findUserByEmail(email);
  if (!user) throw new Error("User not found");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Invalid password");

  const { password: _, ...userWithoutPassword } = user.toObject();
  return userWithoutPassword;
}

export async function updateUser(userId, data) {
  await connect(); // ensure DB is connected

  if (data.password) {
    data.password = await bcrypt.hash(data.password, 10);
  }

  const updatedUser = await Users.findByIdAndUpdate(userId, data, {
    new: true,
  });

  const { password: _, ...userWithoutPassword } = updatedUser.toObject();
  return userWithoutPassword;
}
