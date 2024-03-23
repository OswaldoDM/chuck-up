import { VscGithub } from 'react-icons/vsc';

export function Navbar() {

  return (
    <section>        
        <div className="container navbar"> 

           <a href='https://oswaldodm.github.io/odm-port/' 
           className='odm'
           target='_blank'
           >
              <h1 className="font-blanka">ODM</h1>
            </a>

            <nav className="links">
                <a></a>
                <a></a>
                <a href='https://github.com/OswaldoDM/chuck-jokes-app' 
                className='github-logo'
                target='_blank'
                >
                  <VscGithub />
                </a>
            </nav>

        </div>

    </section>
  )
}
