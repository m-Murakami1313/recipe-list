import type { NextApiHandler } from 'next'
import prisma from '../../libs/prisma'

const handler: NextApiHandler = async (req, res) => {
  try {
    const list = await prisma.list.findMany({
      where: {
        AND: {
          user_list: {
            every: {
              userId: req.body[1],
            },
          },
          listName: {
            contains: req.body[0],
          },
        },
      },
    })
    res.status(200).json(list)
  } catch (error) {
    res.status(500).json(error)
  }
}
export default handler
