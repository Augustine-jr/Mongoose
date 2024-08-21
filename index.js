import dotenv from "dotenv"
import connectdb from "./utils/db.js";
import User from "./model/usersmodel.js"

dotenv.config()


const main = async () => {
  await connectdb()

  const user = new User({
    name: "John Doe",
    email: "johndoe@example.com",
    password: "secret",
  })

  user.save().then(result => console.log(result)).catch(error => console.error(error))
}

main()