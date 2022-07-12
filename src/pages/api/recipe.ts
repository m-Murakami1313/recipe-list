import type { NextApiHandler } from 'next'

const handler: NextApiHandler = async (req, res) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const posts = await response.json()
    res.status(200).json(posts)
  } catch(error) {
    res.status(500).json(error)
  }
}
export default handler
