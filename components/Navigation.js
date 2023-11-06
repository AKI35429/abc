
export default function Navigation(){
    return(
    <nav class="bg-white border-gray-200 dark:bg-gray-900  ">
    <div
      class="max-w-screen-xl flex flex-wrap justify-between items-center py-4 mx-10  "
    >
        <span
          class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
          >Everse</span
        >
      <div
      class="items-center  justify-center hidden w-full md:flex md:w-auto md:order-1"
      id="navbar-user"
    >
      <ul
        class="flex flex-row font-medium p-4 md:p-0 space-x-8 "
      >
        <li>
          <a
            href="/"
            class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
            aria-current="page"
            >MEN</a
          >
        </li>
        <li>
          <a
            href="/"
            class="block py-2 pl-3 pr-4 rounded text-white md:p-0 hover:bg-transparent hover:text-blue-500"
            >WOMEN</a
          >
        </li>
        <li>
          <a
            href="/"
            class="block py-2 pl-3 pr-4 rounded text-white md:p-0 hover:bg-transparent hover:text-blue-500"
            >HOME & LIVING</a
          >
        </li>
        <li>
          <a
            href="/"
            class="block py-2 pl-3 pr-4 rounded text-white md:p-0 hover:bg-transparent hover:text-blue-500"
            >BEAUTY</a
          >
        </li>
        <li>
          <a
            href="/"
            class="block py-2 pl-3 pr-4 rounded text-white md:p-0 hover:bg-transparent hover:text-blue-500"
            >ELECTRONICS</a
          >
        </li>
      </ul>
    </div>
    <div
      class="items-center justify-end  hidden w-full md:flex md:w-auto md:order-1"
      id="navbar-user"
    >
      <ul
        class="flex flex-row font-medium p-4 md:p-0 space-x-8 "
      >
        <li>
        <input type="text" placeholder="Search for products..." className=" bg-gray-200 w-full px-4 py-1 rounded-xl"/>
        </li>
        <li>
          <a
            href="/"
            class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
            aria-current="page"
            >Sign Up</a
          >
        </li>
        <li>
          <a
            href="/"
            class="block py-2 pl-3 pr-4 rounded text-white md:p-0 hover:bg-transparent hover:text-blue-500"
            >Log In</a
          >
        </li>
       
      </ul>
    </div>
    </div>
  </nav>
    );
};
