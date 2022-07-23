import type { NextApiHandler } from 'next'
import prisma from '../../libs/prisma'

const handler: NextApiHandler = async (req, res) => {
  try {
    const list = await prisma.list.findMany({
      where: {
        listName: {
          contains: req.body,
        },
      },
    })
    res.status(200).json(list)
  } catch (error) {
    res.status(500).json(error)
  }
}
export default handler
