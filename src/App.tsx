import FeatherIcon from 'feather-icons-react';

function App() {
  const skills : string[] = ["Javascript","Typescript","PHP","C#","Java","Vue","React","Next.js","Flutter","MySQL","Redis", "Tailwind"];

  return (
    <div className='grid lg:grid-cols-3 grid-cols-1 mx-auto max-w-[60rem] my-20 text-gray-700 gap-2'>
      <div className='flex flex-col justify-between lg:col-span-1 text-xl p-2'>
          <div>
              <h4 className='text-3xl font-bold text-blue-500 mb-5'>Sharifuddin Omar</h4>
              <p className='text-sm text-gray-600 mb-10'>
                  I'm a web and mobile app developer skilled in JavaScript, PHP, Java, and C#. I graduated from Universiti Malaysia Pahang and enjoy game development with Unity and Godot.
              </p>

              <div className='text-base my-4'>
                  <div className='flex gap-1 my-1 items-center'>
                      <FeatherIcon icon='smartphone' size={16} className={'min-w-5'}></FeatherIcon>
                      <a href='tel:601125773772' className='flex-grow hover:text-blue-500'>+601125773772</a>
                  </div>
                  <div className='flex gap-1 my-1 items-center'>
                      <FeatherIcon icon='mail' size={16} className={'min-w-5'}></FeatherIcon>
                      <a href='mailto:dean1595@gmail.com' className='flex-grow hover:text-blue-500'>dean1595@gmail.com</a>
                  </div>
              </div>


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
              <h4 className='text-2xl font-bold py-2 border-b'>Projects I made <small className='text-gray-500'>(or involved in)</small></h4>
              <div className='py-2'>
                  <a href='https://shoppego.com/' className='block text-xl my-2 hover:font-bold hover:text-blue-500' target='_blank'>Shoppego</a>
                  <div className='flex flex-wrap gap-1 my-2'>
                      {['PHP', 'Javascript', 'Vue', 'Tailwind', 'MySQL', 'Redis'].map((skill : string) => {
                          return <div key={skill} className='rounded bg-gray-600 text-white px-2 py-1 text-xs lowercase'>{skill}</div>
                      })}
                  </div>
                  <div className='text-sm text-gray-600'>
                      <div className='flex my-1 items-center'>
                          <FeatherIcon icon='check' size={16} className={'min-w-5'}></FeatherIcon>
                          <span className='flex-grow'>Developed a drag-and-drop web page builder similar to <a className='underline hover:text-blue-500' href='https://unlayer.com/' target='_blank'>Unlayer</a>.</span>
                      </div>
                      <div className='flex my-1 items-center'>
                          <FeatherIcon icon='check' size={16} className={'min-w-5'}></FeatherIcon>
                          <span className='flex-grow'>Developed a dashboard system that helps manage the main system database.</span>
                      </div>
                      <div className='flex my-1 items-center'>
                          <FeatherIcon icon='check' size={16} className={'min-w-5'}></FeatherIcon>
                          <span className='flex-grow'>Developed a multi-platform stock synchronization system that helps manage stocks between platform such as Shopee, Tiktok etc.</span>
                      </div>
                      <div className='flex my-1 items-center'>
                          <FeatherIcon icon='check' size={16} className={'min-w-5'}></FeatherIcon>
                          <span className='flex-grow'>Developed a form module in the main system that helps create a landing page that generate leads and orders.</span>
                      </div>
                  </div>
              </div>

              <div className='py-2'>
                  <a href='https://vecta.io/' className='block text-xl my-2 hover:font-bold hover:text-blue-500' target='_blank'>Vecta.io</a>

                  <div className='flex flex-wrap gap-1 my-2'>
                      {['Javascript', 'Typescript'].map((skill : string) => {
                          return <div key={skill} className='rounded bg-gray-600 text-white px-2 py-1 text-xs lowercase'>{skill}</div>
                      })}
                  </div>
                  <div className='text-sm text-gray-600'>
                      <div className='flex my-1 items-center'>
                          <FeatherIcon icon='check' size={16} className={'min-w-5'}></FeatherIcon>
                          <span className='flex-grow'>Developed a templates module for the main editor, enabling users to select and start with predefined diagrams.</span>
                      </div>
                      <div className='flex my-1 items-center'>
                          <FeatherIcon icon='check' size={16} className={'min-w-5'}></FeatherIcon>
                          <span className='flex-grow'>Developed multiple plugins to provide users with essential utilities.</span>
                      </div>
                  </div>
              </div>

              <div className='py-2'>
                  <a href='https://weniaga.com/' className='block text-xl my-2 hover:font-bold hover:text-blue-500' target='_blank'>Weniaga</a>

                  <div className='flex flex-wrap gap-1 my-2'>
                      {['PHP', 'Javascript', 'MySQL', 'Redis'].map((skill : string) => {
                          return <div key={skill} className='rounded bg-gray-600 text-white px-2 py-1 text-xs lowercase'>{skill}</div>
                      })}
                  </div>
                  <div className='flex gap-1 text-sm text-gray-600'>Developed an inventory management system that involved multi-layered users structure.</div>
              </div>

              <div className='py-2'>
                  <div className='flex gap-1 my-2'>
                      <a href='https://next-js-demo-fe0024.gitlab.io/' className='text-xl  hover:font-bold hover:text-blue-500' target='_blank'>
                          Page builder
                      </a>
                      <small>(Personal Project)</small>
                  </div>

                  <div className='flex flex-wrap gap-1 my-2'>
                      {['Javascript', 'Typescript', 'Next.js', 'Tailwind'].map((skill : string) => {
                          return <div key={skill} className='rounded bg-gray-600 text-white px-2 py-1 text-xs lowercase'>{skill}</div>
                      })}
                  </div>
                  <div className='flex gap-1 text-sm text-gray-600'>Web page builder developed using Next.js</div>
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
