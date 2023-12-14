import routes from '~react-pages'
import { Link } from 'react-router-dom'

const postRouter = routes.find(route => route.path?.startsWith('posts'))!.children!.filter(route => route.path)

export default function ListPosts() {
  return (
    <>
      <div className="relative mt-20">
        <span className="text-8em color-transparent absolute top-2rem text-stroke-2 text-stroke-hex-aaa op10">2023</span>
      </div>

      {postRouter.map((route, i) => (
        <Link
          to={`${route.path!}`}
          key={i}
          className="text-lg block op60 mb-4 mt-2"
        >
          <li className="flex flex-row items-center gap-2">
            <div>{route.path}</div>
            <div className='items-center'>
              <span className='text-sm op50'>Jul 19</span>
              <span className='text-sm op40'> 10min</span>
            </div>
          </li>
        </Link>
      ))}
    </>
  );
}
