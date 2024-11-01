const { default: mongoose } = require("mongoose")

const connection = {};

export const connectToDb = async () => {
  try {
    if (connection.isConnected) {
      return;
    }
    const db = await mongoose.connect(process.env.MONGO);
    connection.isConnected = db.connections[0].readyState;
    console.log("数据库已连接");
  } catch (error) {
    console.log("数据库连接失败", error);
    throw new Error(error);
  }
}