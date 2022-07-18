import type { NextApiHandler } from 'next'
import prisma from '../../libs/prisma'

const handler: NextApiHandler = async (req, res) => {
  try {
    const createRecipe = await prisma.recipe.create({
      data: {
        recipeName: req.body[0],
        process: {
          createMany: {
            data: [...req.body[1]],
          },
        },
      },
      include: {
        process: true,
      },
    })
    res.status(200).json(createRecipe)
  } catch (error) {
    res.status(500).json(error)
  }
}
export default handler