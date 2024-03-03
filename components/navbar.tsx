"use client"

import React from 'react';
import { Button } from './ui/button';

export default function Navbar() {
  return (
    <div className='p-5 flex flex-row justify-between'>
      <div className='flex flex-row gap-3'>
<svg width="31" height="27" viewBox="0 0 31 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M26.5718 0C24.126 0 22.1429 1.90973 22.1429 4.26586C22.1429 6.62259 24.126 8.53291 26.5718 8.53291C29.017 8.53291 31 6.62259 31 4.26586C31 1.90973 29.017 0 26.5718 0ZM4.42884 0C1.98303 0 0 1.90973 0 4.26586C0 6.62259 1.98303 8.53291 4.42884 8.53291C6.87464 8.53291 8.85705 6.62259 8.85705 4.26586C8.85705 1.90973 6.87464 0 4.42884 0ZM19.9288 22.7341C19.9288 25.0903 17.9464 27 15.5006 27C13.0548 27 11.0718 25.0903 11.0718 22.7341C11.0718 20.3774 13.0548 18.4677 15.5006 18.4677C17.9464 18.4677 19.9288 20.3774 19.9288 22.7341Z" fill="white"/>
</svg>
      <p className='text-xl font-bold cursor-pointer'>MORNINGBYTE</p>
      </div>
      <nav>
        <ul className='flex flex-row'>
          <li><Button variant={"default"}>About</Button></li>
          <li><Button variant={"secondary"}>Support Me</Button></li>
        </ul>
      </nav>
    </div>
  );
}
