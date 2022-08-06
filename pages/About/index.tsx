import React from 'react'
import './styles.css'
import Me from '../../src/assets/ABME.jpg'

const About = () => {
  return (
    <div>
        <main className="main-containers">
              <div className="div-main">
                  <div className="div-img">
                      <img src={Me} />
                  </div>
                  <div className="div-bio">
                      <h2>Bio</h2>
                        <p>I have been passionate for photographs from a young age, where pictures had a different meaning than nowadays, they were more precious, scarcer and more private. The touch of a photo and the feeling that it generates, combined with the image itself it is something that I will always remember.</p>
                    
                        <p>The best pictures are those that you take and those that you experience.</p>

                        <p>Photography came to me in recent years when I got my first mirrorless, I have also been interested in film because it makes you be more careful and perfectionist due to the few pictures that you can get on a roll. I've taken pictures with my phone as well, some of those images you can see them in my trip in France and Peru.</p>  

                        <p>I've always wanted to put together these photographs and show them to the world. It took some time to select them, edit them, and build this website in the way I wanted. .</p>

                        <p>I also included two of my other passions in this page which are music and cooking. I linked my cooking YouTube page and my music SoundCloud page if you want to check them down below.</p>

                        <p>I'll be updating my website and releasing new images and destinations in the future. I hope you'll enjoy some of these works. </p>

                        <p className='upper'>David Avila. </p>
                        
                </div>

            </div>

        </main>
    </div>
    )
}

export default About