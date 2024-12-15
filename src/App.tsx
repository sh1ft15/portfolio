
function App() {
  const skills : string[] = ["Javascript","Typescript","PHP","C#","Java","Vue","React","Next.js","Flutter","MySQL","Redis"];

  return (
    <div className='grid lg:grid-cols-3 grid-cols-1 mx-auto max-w-[60rem] my-20 text-gray-700'>
      <div className='flex flex-col justify-between lg:col-span-1 text-xl p-2'>
          <div>
              <h4 className='text-3xl font-bold text-blue-500 mb-5'>Sharifuddin Omar</h4>
              <p className='text-sm text-gray-600 mb-10'>
                  I'm a web and mobile app developer skilled in JavaScript, PHP, Java, and C#. I graduated from Universiti Malaysia Pahang and enjoy game development with Unity and Godot.
              </p>

              <h4 className='text-xl font-bold mb-2'>Skills</h4>
              <div className='flex flex-wrap gap-2'>
                  {skills.map((skill : string) => {
                      return <div key={skill} className='rounded bg-gray-700 text-white px-2 py-1 text-sm lowercase'>{skill}</div>
                  })}
              </div>
          </div>
      </div>
      <div className='lg:col-span-2 text-xl p-2'>

          <div className='mb-5'>
              <h4 className='text-2xl font-bold py-2 border-b'>Projects I made</h4>
              <div className='py-2'>
                  <h5 className='text-base font-bold mb-2'>Page builder</h5>
                  <p className='flex gap-1 text-sm text-gray-600'>Web page builder developed using Next.js</p>
                  <a href='#' className='inline-block border rounded bg-gray-50 hover:bg-gray-200 text-sm text-gray-900 px-3 py-2 my-2'>View the builder here</a>
              </div>
          </div>

          <div className='mb-2'>
              <h4 className='text-2xl font-bold py-2 border-b'>Games I made</h4>
              <div className='py-2'>

                  <div className='mb-2'>
                      <iframe frameBorder="0" src="https://itch.io/embed/1814512?border_width=0&amp;link_color=2f2f2f" width="550" height="165">
                          <a href="https://sh1ft15.itch.io/polaroid">Polaroid by sh1ft15</a>
                      </iframe>
                  </div>

                  <div className='mb-2'>
                      <iframe frameBorder="0" src="https://itch.io/embed/3083602?border_width=0&amp;link_color=2f2f2f" width="552" height="167">
                          <a href="https://sh1ft15.itch.io/secret">Treasure Terrors by sh1ft15</a>
                      </iframe>
                  </div>

                  <a href='https://sh1ft15.itch.io/' className='inline-block border rounded bg-gray-50 hover:bg-gray-200 text-sm text-gray-900 px-3 py-2 my-2'>
                      Find out more here
                  </a>

              </div>
          </div>

      </div>
    </div>
  )
}

export default App
