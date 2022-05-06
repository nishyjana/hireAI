export default function Profile() {
    return (
        <div className="flex flex-col w-full h-full items-center py-36  px-10">
            <div className="justify-end flex w-full px-10 py-1">
                <button className="mt-11 w-1/4 3xl:w-1/6 bg-hireAI text-white py-3 rounded-3xl mr-20 flex px-10">
                    <div className="ml-1 m-auto"> TRACK PROGRESS</div>
                    <img className="ml-1 -mt-1" alt="" src="images/Track.png" />
                </button>
                <button className="mt-10 w-1/4  3xl:w-1/6 bg-hireAI text-white py-3 rounded-3xl mr-20 flex px-10">
                    <div className="ml-6 m-auto"> EDIT PROFILE</div>
                    <img className="ml-1 mt-2" alt="" src="images/Edit.png" />
                </button>
            </div>
            <div className="w-2/3 h-2/3 border-2 border-b-8 border-gray-100 flex rounded-3xl my-32">
                <div className="w-1/3  flex">
                    <div className="m-auto">
                        <img
                            className="w-44 h-44 object-cover rounded-full"
                            alt=""
                            src="https://expertphotography.b-cdn.net/wp-content/uploads/2018/10/cool-profile-pictures-retouching-1.jpg"
                        />
                    </div>
                </div>

                <div className="w-2/3 flex justify-evenly py-10">
                    <div className="flex flex-col 3xl:-ml-44">
                        <div className="mb-3">
                            <div className="mb-1">FIRST NAME</div>
                            <div className="mb-3 font-medium">Lorem Ipsum</div>
                        </div>

                        <div className="mb-3">
                            <div className="mb-1">EMAIL</div>
                            <div className="mb-3 font-medium">example@example.com</div>
                        </div>

                        <div className="mb-3">
                            <div className="mb-1">UNIVERSITY</div>
                            <div className="mb-3 font-medium">
                                Informatics Institute of Technology
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="mb-3">
                            <div className="mb-1">LAST NAME</div>
                            <div className="mb-3 font-medium">Lorem Ipsum</div>
                        </div>

                        <div className="mb-3">
                            <div className="mb-1">CONTACT</div>
                            <div className="mb-3 font-medium">+9477090909</div>
                        </div>

                        <div className="mb-3">
                            <div className="mb-1">DEGREE PROGRAM</div>
                            <div className="mb-3 font-medium">Software Engineering</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
