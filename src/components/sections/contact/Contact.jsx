import React, {useState, useEffect, useMemo, useRef} from 'react';

import Links from '../../links/Links';
import ContactLinks from '../../contactLinks/ContactLinks';

import './Contact.scss'

export default function Contact({links, refLink, theme}) {

const contact = useRef(null);

const isInViewport = useIsInViewport(contact);

return (
  <section ref={refLink} id='Contact' className={theme}>
    <Links links={links} theme={theme} isInViewport={isInViewport}/>
    <ContactLinks refe={contact} links={links} theme={theme} isInViewport={isInViewport} />
    <p ref={contact} className='copyright'>© 2022 Damian Sroczyński All Rights Reserved</p>
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