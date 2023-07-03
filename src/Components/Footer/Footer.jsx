const Footer = () => {
  return (
    <footer className="flex justify-center gap-48 p-10 bg-[#F2921D] text-neutral-content">
      <div>
        <span className="text-2xl ">Address </span>
        <hr className="w-[344px] h-1 bg-gray-100 border-0 rounded mt-4 dark:bg-gray-700" />
        <div className=" mt-7" >
        <p>Block: F/1</p>
        <p>House: 11</p>
        <p>Biswash Betka, Tangail.</p>
        </div>
        
      </div>
      <div>
        <span className="text-2xl">Site Map</span>
        <hr className="w-[344px] h-1 bg-gray-100 border-0 rounded mt-4 dark:bg-gray-700" />
        <div className="flex flex-col  mt-7" >
        <a className="link link-hover">Home</a>
        <a className="link link-hover">Courses</a>
        <a className="link link-hover">About</a>
        <a className="link link-hover">Contact</a>
        </div>
      </div>
      <div>
        <span className="text-2xl">Social Links</span>
        <hr className="w-[344px] h-1 bg-gray-100 border-0 rounded mt-4 dark:bg-gray-700" />
        <div className="flex flex-col mt-7" >
        <a className="link link-hover">facebook.com/mjkibria</a>
        <a className="link link-hover">youtube.com/mjkibria</a>
        <a className="link link-hover">instagram.com/mjkibria</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
