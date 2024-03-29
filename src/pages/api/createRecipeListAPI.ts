import type { NextApiHandler } from 'next'
import prisma from '../../libs/prisma'

const handler: NextApiHandler = async (req, res) => {
  try {
    const recipeList = await prisma.list.create({
      data: {
        listName: req.body[2].listName,
        list_recipe: {
          create: [ ...req.body[0] ],
        },
        user_list: {
          create: {
            userId: req.body[1].userId,
          },
        },
      },
      include: {
        user_list: true,
        list_recipe: true,
      },
    })
    res.status(200).json(recipeList)
  } catch (recipeList) {
    res.status(500).json(recipeList)
  }
}
export default handler
