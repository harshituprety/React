import React from 'react'

const App = () => {
  return (
    <div className='h-screen w-screen flex'>
      <nav className='w-[15%] h-full bg-zinc-50 flex flex-col items-center pt-5'>
        <a className='px-5 py-2 border rounded border-blue-200 text-blue-300' href="/create">Add New Product</a>
        <hr className='my-3 w-[80%]'/>
        <h1 className='text-2xl mb-3 w-[80%]'>Category Filter</h1>
        <ul className=' w-[80%]'>
          <li className='flex items-center mb-3'><span className='rounded-full mr-2 bg-blue-100 w-[15px] h-[15px] '>{""}</span> cat 1</li>
          <li className='flex items-center mb-3'><span className='rounded-full mr-2 bg-yellow-100 w-[15px] h-[15px] '>{""}</span> cat 2</li>
          <li className='flex items-center mb-3'><span className='rounded-full mr-2 bg-green-100 w-[15px] h-[15px] '>{""}</span> cat 3</li>
        </ul>


      </nav>
      
      <div className='h-full w-[85%] bg-red-100'>

        <div className='card p-5 border rounded shadow w-[18%] h-[30vh] flex flex-col items-center justify-center'>
          <div style={{backgroundImage:"url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png)"}}></div>
        </div>
      </div>
    </div>
  )
}

export default App
