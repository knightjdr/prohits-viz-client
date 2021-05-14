import React from 'react';

import Link from '../../../components/link/text/link';

const Regex = () => (
  <>
    <p>
      Regular expressions are supported in searches. These are sequences of characters that denote a search pattern
      to find. For example,
      {' '}
      <code>^ra</code>
      {' '}
      would match to labels beginning with
      {' '}
      <code>ra</code>
      {' '}
      but not otherwise. Some of the more common characters are shown below, but please checkout this
      {' '}
      <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet">
        cheatsheet
      </Link>
      {' '}
      for a more extensive list.
    </p>
    <div className="help__inner-table-container">
      <table className="help__inner-table">
        <thead>
          <tr>
            <th>character</th>
            <th>meaning</th>
            <th>example</th>
            <th>match</th>
            <th>non-match</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>^</td>
            <td>match the beginning of a string</td>
            <td>
              <code>^ra</code>
            </td>
            <td>
              <code>raf1</code>
            </td>
            <td>
              <code>araf</code>
            </td>
          </tr>
          <tr>
            <td>$</td>
            <td>match the end of a string</td>
            <td>
              <code>raf$</code>
            </td>
            <td>
              <code>araf</code>
            </td>
            <td>
              <code>raf1</code>
            </td>
          </tr>
          <tr>
            <td>\d</td>
            <td>match a digit</td>
            <td>
              <code>raf\d</code>
            </td>
            <td>
              <code>raf1</code>
            </td>
            <td>
              <code>raf</code>
            </td>
          </tr>
          <tr>
            <td>*</td>
            <td>match zero or more times</td>
            <td>
              <code>raf\d*</code>
            </td>
            <td>
              <code>raf1</code>
              ,
              {' '}
              <code>raf</code>
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>+</td>
            <td>match at least once</td>
            <td>
              <code>raf\d+</code>
            </td>
            <td>
              <code>raf1</code>
              ,
              {' '}
              <code>raf11</code>
            </td>
            <td>raf</td>
          </tr>
        </tbody>
      </table>
    </div>
  </>
);

export default Regex;
