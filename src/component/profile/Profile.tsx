export default function Profile() {
    return (
        <>
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
                        <div className="mb-3 font-medium">Informatics Institute of Technology</div>
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
        </>
    );
}
