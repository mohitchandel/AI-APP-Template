function Footer(){
  return (
    <footer className="bg-primary dark:bf-light rounded-lg shadow m-4 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-300 sm:text-center dark:text-gray-300">
          © 2024{" "}
          <a href="/" className="hover:underline">
            TheAI
          </a>
          . All Rights Reserved. <span className="text-muted-foreground">Created by <a href="https://mohitchandel.in" target="_blank" className="hover:underline">Mohit Chandel</a></span>
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-300 dark:text-gray-300 sm:mt-0">
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Licensing
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;