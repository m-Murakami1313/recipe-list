import type { NextPage } from 'next'
import Link from 'next/link'
import { Layout } from '@/components/Layout'
import { SearchForm } from '@/components/UI/organisms/SearchForm'
import { useRecipeList } from '@/hooks/useRecipeList'

const SearchRecipe: NextPage = () => {
  const { recipes, getRecipe } = useRecipeList()
  return (
    <Layout title='searchRecipe'>
      <div className='mt-10'>
        <SearchForm getData={getRecipe}/>
        <div className='mt-5'>
          <p>検索結果</p>
          <ul>
            {recipes.map((recipe: any, index: number) => (
              <div key={recipe.id} className='flex items-center py-4'>
                <Link href='/'>
                  <a>
                    <li className='hover:text-blue-800 hover:underline'>{recipe.name}</li>
                  </a>
                </Link>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default SearchRecipe
