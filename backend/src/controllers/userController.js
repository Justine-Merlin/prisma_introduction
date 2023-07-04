const prisma = require("../prismaClient");

const browse = (req, res) => {
  prisma.user
    .findMany({
      include: {
        profile: true,
      },
    })
    .then((result) => res.status(200).json(result));
};

const add = (req, res) => {
  prisma.user
    .create({
      data: {
        email: "mail1@mail.com",
        role: "user",
        profile: {
          create: {
            bio: "lorem ipsum",
          },
        },
      },
    })
    .then((result) => {
      console.log(result);
      res.sendStatus(201);
    });
};

module.exports = {
  browse,
  add,
};
