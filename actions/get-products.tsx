import { Product } from '@/types'
import qs from 'query-string'

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`

interface Query {
  categoryId?: string
  colorId?: string
  sizeId?: string
  isFeatured?: boolean
}

const getProducts = async (query: Query): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      colorId: query.colorId,
      sizeId: query.sizeId,
      categoryId: query.categoryId,
      isFeatured: query.isFeatured
    }
  })

  /*  @example of stringifyUrl

     const url = qs.stringifyUrl({
    url: 'http://localhost:3000/api/81a4b907-4a7b-4380-91e3-bf49960516a6/products/',
    query: {
      categoryId: 098efe02-b5d8-4b89-82e5-52b0d2818ce5,
    }
  })

  //=> 'http://localhost:3000/api/81a4b907-4a7b-4380-91e3-bf49960516a6/products?          categoryId=098efe02-b5d8-4b89-82e5-52b0d2818ce5'


    queryString.stringifyUrl({url: 'https://foo.bar', query: {foo: 'bar'}});
    //=> 'https://foo.bar?foo=bar'

    queryString.stringifyUrl({url: 'https://foo.bar?foo=baz', query: {foo: 'bar'}});
    //=> 'https://foo.bar?foo=bar'

    queryString.stringifyUrl({
    url: 'https://foo.bar',
    query: {
    top: 'foo'
    },
    fragmentIdentifier: 'bar'
    });
    //=> 'https://foo.bar?top=foo#bar'
    
  */

  const res = await fetch(url)

  return res.json()
}

export default getProducts
