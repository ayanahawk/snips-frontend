
import React from 'react';
import Snip from './Snip';

export default function SnipList({ snippets }) {
  console.log('Snip List rendered');
  // fetch snippets and then render
  return (
    <section id="snippets">
      {snippets.map(snippet => (
        <Snip key={snippet.id} snippet={snippet} />
      ))}
    </section>
  );
}