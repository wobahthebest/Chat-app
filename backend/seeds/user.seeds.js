import { config } from "dotenv";
import { connectDb } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [
  // Female Users
  {
    email: "emma.thompson@example.com",
    fullName: "Emma Thompson",
    password: "123456",
    profilePic: "https://i.waifu.pics/CNzs4Pd.jpg",
  },
  {
    email: "olivia.miller@example.com",
    fullName: "Olivia Miller",
    password: "123456",
    profilePic: "https://i.waifu.pics/mbQ4c4V.jpg",
  },
  {
    email: "sophia.davis@example.com",
    fullName: "Sophia Davis",
    password: "123456",
    profilePic: "https://i.waifu.pics/3DpVCc3.jpg",
  },
  {
    email: "ava.wilson@example.com",
    fullName: "Ava Wilson",
    password: "123456",
    profilePic: "https://i.waifu.pics/wRpvaDu.jpg",
  },
  {
    email: "isabella.brown@example.com",
    fullName: "Isabella Brown",
    password: "123456",
    profilePic: "https://i.waifu.pics/07eNAFm.jpg",
  },

  // Male Users
  {
    email: "james.anderson@example.com",
    fullName: "James Anderson",
    password: "123456",
    profilePic:
      "https://cdn.animeloved.com/animeloved/6020a336-11af-4c68-a3b2-0e9ef8f0cdba8008182-edited.webp",
  },
  {
    email: "william.clark@example.com",
    fullName: "William Clark",
    password: "123456",
    profilePic:
      "https://i0.wp.com/yumetwinsblog.wpcomstaging.com/wp-content/uploads/2025/01/male-anime-character-haruka-sakura-wind-breaker.webp?resize=620%2C349&ssl=1",
  },
  {
    email: "benjamin.taylor@example.com",
    fullName: "Benjamin Taylor",
    password: "123456",
    profilePic:
      "https://preview.redd.it/who-is-the-most-handsome-anime-male-character-according-to-v0-rtevm4u1opbe1.jpg?width=640&crop=smart&auto=webp&s=b60d146fbcf749a08297aa125f7f74e1e9d3202b",
  },
  {
    email: "lucas.moore@example.com",
    fullName: "Lucas Moore",
    password: "123456",
    profilePic:
      "https://images.wondershare.com/filmora/article-images/11-satoru-gojo.jpg",
  },
];

const seedDatabase = async () => {
  try {
    await connectDb();

    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Call the function
seedDatabase();
