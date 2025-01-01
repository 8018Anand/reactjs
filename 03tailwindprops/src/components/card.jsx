import React from 'react'

const Card = ({userName = "NA"}) => { //destructuring props OBJECT and setting default value for userName 
  
  return (
    <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
      <img className="w-24 h-24 rounded-full mx-auto" src='https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=1024&h=1024&q=80' alt="" width="384" height="512" />
      <div className="pt-6 space-y-4">
        <blockquote>
          <p className="text-lg font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, illo.
          </p>
        </blockquote>
        <figcaption className="font-medium">
          <div className="text-sky-500 dark:text-sky-400">
            {userName}
          </div>
          <div >
            Staff Engineer, Algolia
          </div>
        </figcaption>
      </div>
    </figure>
  )
}

export default Card