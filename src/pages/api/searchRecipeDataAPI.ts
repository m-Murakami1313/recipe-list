import type { NextApiHandler } from 'next'
import prisma from '../../libs/prisma'

const handler: NextApiHandler = async (req, res) => {
  try {
    const recipe = await prisma.recipe.findMany({
      where: {
        recipeName: {
          contains: req.body,
        },
      },
    })
    res.status(200).json(recipe)
  } catch (error) {
    res.status(500).json(error)
  }
}
export default handler
