import React from 'react';

import Toolbox from './toolbox';
import tools from './tools';

import './getting-started.css';

const GettingStarted = () => (
  <section className="getting-started">
    <h3>Getting started</h3>
    <div className="getting-started__tools">
      {
        tools.map(tool => (
          <Toolbox
            image={tool.image}
            key={tool.title}
            link={tool.link}
            text={tool.text}
            title={tool.title}
          />
        ))
      }
    </div>
  </section>
);


export default GettingStarted;
