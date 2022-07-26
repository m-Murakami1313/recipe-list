import type { NextApiHandler } from 'next'
import prisma from '../../libs/prisma'

const handler: NextApiHandler = async (req, res) => {
  try {
    const recipe = await prisma.recipe.findMany({
      where: {
        AND: {
          user_recipe: {
            every: {
              userId: req.body[1],
            },
          },
          recipeName: {
            contains: req.body[0],
          },
        },
      },
    })
    res.status(200).json(recipe)
    console.log(req.body)
  } catch (error) {
    console.log(req.body)
    res.status(500).json(error)
  }
}
export default handler
