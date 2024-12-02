const CommonHeader = ({ title, description }) => {
  return (
    <article className='mb-4 mt-0 rounded-lg bg-white dark:bg-dark dark:border-none border p-6'>
      <div className='space-y-2 rounded-md dark:text-white text-black'>
        <h1 className='mb-0 flex scroll-m-20 not-prose items-center lg:text-3xl text-2xl gap-2 font-semibold tracking-tight'>
          <div className='lg:w-10  w-8 lg:h-10  h-8 bg-primary grid place-content-center text-primary-foreground rounded-lg'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='lucide lucide-component '>
              <path d='M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z'></path>
              <path d='m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z'></path>
              <path d='M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z'></path>
              <path d='m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z'></path>
            </svg>
          </div>
          {title}
        </h1>
        <p className='sm:text-sm text-xs'>{description}</p>
      </div>
    </article>
  );
};

export default CommonHeader;
