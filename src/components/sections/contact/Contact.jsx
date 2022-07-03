import React, {useState, useEffect, useMemo, useRef} from 'react';

import Links from '../../links/Links';

import './Contact.scss'

export default function Contact({links}) {

const contact = useRef(null);

const isInViewport = useIsInViewport(contact);

return (
  <section id='Contact' >
    <Links links={links}/>
    <h1 ref={contact}>Contact {isInViewport && 'is IN ViewPort'}</h1>
  </section>
)}

function useIsInViewport(ref) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry.isIntersecting),
      ),
    [],
  );

  useEffect(() => {
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
}