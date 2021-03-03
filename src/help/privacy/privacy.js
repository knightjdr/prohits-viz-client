import React from 'react';

import './privacy.css';

const Privacy = () => (
  <div className="help__privacy">
    <h1>Privacy</h1>
    <p>
      We do not collect any personal information from our users.
    </p>
    <p>
      Analysis tasks are deleted from our servers after 24 hours. Links to task files
      are publicily available to anyone with the link, so only share links with those
      you feel comfortable giving access to your data. Tasks are assigned a random 14 character identifier
      from an alphabet of 64. It would take ~20 years for someone to have a 1%
      probability of guessing an ID if they were testing 1000 urls a second. Rate-limiting on our
      server will block them long before that happens.
    </p>
    <p>
      Archived files will be kept for three months by default or permanently if a specific request
      for this is made. The archive of files/ids will not be publicly listed anywhere but should be
      treated as such, i.e. only archive data you are willing to make public.
    </p>
  </div>
);

export default Privacy;
