import type { NextApiHandler } from 'next'
import prisma from '../../libs/prisma'


const handler: NextApiHandler = async (req, res) => {
  try {
    const user = await prisma.recipe.findMany({
      include: {
        process:true
      },
    })
    res.status(200).json(user)
  } catch (error) {
    res.status(500).json(error)
  }
}
export default handler