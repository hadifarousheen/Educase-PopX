const Profile = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="h-screen w-full  md:w-[70%] border border-gray-400 flex flex-col  px-3 ">
        <div className="flex items-center">
          {" "}
          <h1 className="text-2xl py-6 md:py-8 md:text-5xl ">
            Account Settings
          </h1>
        </div>

        <div className="flex bg-[#f7f8f9] border border-[#f7f8f9] p-4 md:text-4xl">
          <div className="rounded-full">
            <img
              className="rounded-full w-20 h-20 md:w-30 md:h-30"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvJaoIeJQU_V9rL_ZII61whWyqSFbmMgTgwQ&s"
            />
          </div>
          <div className="ml-4">
            <h2 className="font-bold">Marry Doe</h2>
            <p>Marry@Gmail.Com</p>
          </div>
        </div>
        <p className="bg-[#f7f8f9] pb-4 md:text-3xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quis
          officiis natus nostrum ut fugiat. Ipsum mollitia a optio numquam.
          Exercitationem, nihil esse.
        </p>
        <hr class="border-t border-dotted border-gray-400"></hr>
      </div>
    </div>
  );
};

export default Profile;
