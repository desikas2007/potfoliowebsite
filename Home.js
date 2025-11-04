import React from 'react';
import Particles from '@tsparticles/react';
import { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { useEffect, useState } from 'react';

function Home() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <div className="home-page">
      {init && (
        <Particles
          id="tsparticles"
          options={{
            background: { color: '#0d1b2a' },
            particles: {
              color: { value: '#ffffff' },
              move: { enable: true, speed: 2 },
              number: { value: 40 },
              opacity: { value: 0.5 },
              size: { value: 2 },
            },
          }}
        />
      )}
      <div className="home-content" data-aos="fade-up">
        <h1>Welcome to My Portfolio</h1>
        <p>Explore my projects and skills.</p>
        <img src="profilephoto.jpeg" alt="My Profile" style={{ width: "200px", borderRadius: "50%" }} />
      </div>
    </div>
  );
}

export default Home;
